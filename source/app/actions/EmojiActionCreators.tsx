// app/actions/EmojiActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function() { // Original name: _updateEmoji
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
                    if(zuuluu) { _fun00002_ip = 206; continue _fun00001 }
 13:
                    offset = michal.guildId;
                    golfie = michal.emojiId;
                    verify = michal.name;
                    option = michal.roles;
                    oscard = undefined;
                    SaveGenerator(address=41);
 39:
                    return oscard;
 41:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00002_ip = 203; continue _fun00001 }
 50: // try_start_0
                    tangon = _closure1_slot0;
                    report = _closure1_slot2;
                    zuuluu = 9;
                    zuuluu = report[zuuluu];
                    zuuluu = tangon.bind(oscard)(zuuluu);
                    report = zuuluu.HTTP;
                    tangon = report.patch;
                    zuuluu = {};
                    romeon = _closure1_slot7;
                    yankee = romeon.GUILD_EMOJI;
                    golfie = yankee.bind(romeon)(offset, golfie);
                    zuuluu['url'] = golfie;
                    golfie = {};
                    golfie['name'] = verify;
                    golfie['roles'] = option;
                    zuuluu['body'] = golfie;
                    golfie = true;
                    zuuluu['oldFormErrors'] = golfie;
                    zuuluu['rejectWithError'] = golfie;
                    zuuluu = tangon.bind(report)(zuuluu);
                    SaveGenerator(address=141);
 139:
                    return zuuluu;
 141:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(tangon) { _fun00002_ip = 150; continue _fun00001 }
 147: // try_end0
                    return zuuluu;
 150:
                    return zuuluu;
 153: // catch_target0
                    CatchBlockStart(arg_register=4);
                    tangon = _closure1_slot1;
                    golfie = _closure1_slot2;
                    zuuluu = 10;
                    zuuluu = golfie[zuuluu];
                    zuuluu = tangon.bind(oscard)(zuuluu);
                    tangon = zuuluu.prototype;
                    tangon = Object.create(tangon, {constructor: {value: zuuluu}});
                    kiloes = tangon;
                    backup = report;
                    zuuluu = new kiloes[zuuluu](backup, foxtra);
                    zuuluu = zuuluu instanceof Object ? zuuluu : tangon;
                    throw zuuluu;
 203:
                    return michal;
 206:
                    return entity;
                }
            };
            michal = entity.next;
            michal = michal.bind(entity)();
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot10 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot10 = entity;
    entity = function(argFoo) { // Original name: dedupeFavoriteEmojis
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            zuuluu = _closure1_slot6;
            zuuluu = zuuluu.totalUnavailableGuilds;
            tangon = 0;
            if(!(!(zuuluu > tangon))) { _fun00004_ip = 141; continue _fun00003 }
 22:
            report = _closure1_slot5;
            zuuluu = report.isConnected;
            zuuluu = zuuluu.bind(report)();
            if(zuuluu) { _fun00004_ip = 41; continue _fun00003 }
 39:
            return entity;
 41:
            report = entity.map;
            zuuluu = function(argFoo) {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    tangon = argFoo;
                    zuuluu = _closure1_slot4;
                    entity = zuuluu.getCustomEmojiById;
                    entity = entity.bind(zuuluu)(tangon);
                    zuuluu = null;
                    if(!(zuuluu == entity)) { _fun00006_ip = 60; continue _fun00005 }
 27:
                    report = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    michal = 11;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    zuuluu = report.bind(michal)(zuuluu);
                    michal = zuuluu.getByName;
                    entity = michal.bind(zuuluu)(tangon);
 60:
                    return entity;
                }
            };
            option = report.bind(entity)(zuuluu);
            oscard = option.filter;
            verify = _closure1_slot0;
            golfie = _closure1_slot2;
            zuuluu = 12;
            zuuluu = golfie[zuuluu];
            report = undefined;
            zuuluu = verify.bind(report)(zuuluu);
            zuuluu = zuuluu.isNotNullish;
            zuuluu = oscard.bind(option)(zuuluu);
            oscard = _closure1_slot1;
            michal = 13;
            michal = golfie[michal];
            michal = oscard.bind(report)(michal);
            zuuluu = michal.bind(report)(zuuluu);
            michal = zuuluu.keys;
            yankee = michal.bind(zuuluu)();
            michal = new Array(0);
            romeon = michal;
            offset = 0;
            zuuluu = arraySpread(romeon, yankee, offset);
            return michal;
 141:
            return entity;
        }
    };
    var _closure1_slot11 = entity;
    entity = function(argFoo) { // Original name: getFavoriteEmojiNameOrId
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            zuuluu = argFoo;
            tangon = null;
            michal = tangon == zuuluu;
            entity = null;
            if(michal) { _fun00008_ip = 91; continue _fun00007 }
 14:
            michal = zuuluu.id;
            if(!(tangon == michal)) { _fun00008_ip = 79; continue _fun00007 }
 23:
            golfie = _closure1_slot1;
            oscard = _closure1_slot2;
            report = 11;
            oscard = oscard[report];
            report = undefined;
            option = golfie.bind(report)(oscard);
            golfie = option.convertSurrogateToBase;
            oscard = zuuluu.surrogates;
            oscard = golfie.bind(option)(oscard);
            golfie = tangon == oscard;
            if(golfie) { _fun00008_ip = 76; continue _fun00007 }
 71:
            report = oscard.name;
 76:
            michal = report;
 79:
            if(!(tangon == michal)) { _fun00008_ip = 88; continue _fun00007 }
 83:
            michal = zuuluu.name;
 88:
            entity = michal;
 91:
            return entity;
        }
    };
    var _closure1_slot12 = entity;
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
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.Endpoints;
    var _closure1_slot7 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.MAX_FAVORITES;
    var _closure1_slot8 = golfie;
    tangon = tangon.UserSettingsDelay;
    var _closure1_slot9 = tangon;
    tangon = 17;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'actions/EmojiActionCreators.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: setDiversityColor
        entity = argFoo;
        var _closure2_slot0 = entity;
        report = _closure1_slot0;
        tangon = _closure1_slot2;
        entity = 6;
        tangon = tangon[entity];
        entity = undefined;
        tangon = report.bind(entity)(tangon);
        oscard = tangon.PreloadedUserSettingsActionCreators;
        report = oscard.updateAsync;
        zuuluu = _closure1_slot9;
        tangon = zuuluu.FREQUENT_USER_ACTION;
        zuuluu = 'textAndImages';
        michal = function(argFoo) {
            michal = argFoo;
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 7;
            zuuluu = zuuluu[entity];
            entity = undefined;
            zuuluu = tangon.bind(entity)(zuuluu);
            tangon = zuuluu.StringValue;
            zuuluu = tangon.create;
            zuuluu = zuuluu.bind(tangon)();
            michal['diversitySurrogate'] = zuuluu;
            zuuluu = michal.diversitySurrogate;
            michal = _closure2_slot0;
            zuuluu['value'] = michal;
            return entity;
        };
        michal = report.bind(oscard)(zuuluu, michal, tangon);
        return entity;
    };
    zuuluu['setDiversityColor'] = tangon;
    tangon = function(argFoo) { // Original name: fetchEmoji
        option = argFoo;
        var _closure2_slot0 = option;
        tangon = _closure1_slot1;
        report = _closure1_slot2;
        entity = 8;
        zuuluu = report[entity];
        entity = undefined;
        golfie = tangon.bind(entity)(zuuluu);
        tangon = golfie.dispatch;
        zuuluu = {};
        verify = 'EMOJI_FETCH';
        zuuluu['type'] = verify;
        zuuluu['guildId'] = option;
        zuuluu = tangon.bind(golfie)(zuuluu);
        tangon = _closure1_slot0;
        zuuluu = 9;
        zuuluu = report[zuuluu];
        zuuluu = tangon.bind(entity)(zuuluu);
        report = zuuluu.HTTP;
        tangon = report.get;
        zuuluu = {'url': null, 'oldFormErrors': true, 'rejectWithError': true};
        golfie = _closure1_slot7;
        oscard = golfie.GUILD_EMOJIS;
        oscard = oscard.bind(golfie)(option);
        zuuluu['url'] = oscard;
        report = tangon.bind(report)(zuuluu);
        tangon = report.then;
        zuuluu = function(argFoo) {
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 8;
            michal = michal[entity];
            entity = undefined;
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.dispatch;
            entity = {};
            tangon = 'EMOJI_FETCH_SUCCESS';
            entity['type'] = tangon;
            tangon = _closure2_slot0;
            entity['guildId'] = tangon;
            tangon = argFoo;
            tangon = tangon.body;
            entity['emojis'] = tangon;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        michal = function() {
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 8;
            michal = michal[entity];
            entity = undefined;
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.dispatch;
            entity = {};
            tangon = 'EMOJI_FETCH_FAILURE';
            entity['type'] = tangon;
            tangon = _closure2_slot0;
            entity['guildId'] = tangon;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        michal = tangon.bind(report)(zuuluu, michal);
        return entity;
    };
    zuuluu['fetchEmoji'] = tangon;
    tangon = function(argFoo) { // Original name: uploadEmoji
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            michal = argFoo;
            romeon = michal.guildId;
            var _closure2_slot0 = romeon;
            offset = michal.image;
            verify = michal.name;
            option = michal.roles;
            golfie = michal.analyticsLocation;
            zuuluu = _closure1_slot1;
            tangon = _closure1_slot2;
            michal = 8;
            michal = tangon[michal];
            oscard = undefined;
            yankee = zuuluu.bind(oscard)(michal);
            zuuluu = yankee.dispatch;
            michal = {};
            foxtra = 'EMOJI_UPLOAD_START';
            michal['type'] = foxtra;
            michal['guildId'] = romeon;
            michal = zuuluu.bind(yankee)(michal);
            zuuluu = _closure1_slot0;
            michal = 9;
            michal = tangon[michal];
            michal = zuuluu.bind(oscard)(michal);
            tangon = michal.HTTP;
            zuuluu = tangon.post;
            michal = {};
            yankee = _closure1_slot7;
            report = yankee.GUILD_EMOJIS;
            report = report.bind(yankee)(romeon);
            michal['url'] = report;
            report = {};
            report['image'] = offset;
            report['name'] = verify;
            report['roles'] = option;
            michal['body'] = report;
            report = {};
            option = null;
            option = option == golfie;
            if(option) { _fun00010_ip = 173; continue _fun00009 }
 167:
            oscard = golfie.page;
 173:
            report['client_event_source'] = oscard;
            michal['context'] = report;
            report = true;
            michal['oldFormErrors'] = report;
            report = false;
            michal['rejectWithError'] = report;
            tangon = zuuluu.bind(tangon)(michal);
            zuuluu = tangon.then;
            michal = function(argFoo) {
                zuuluu = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 8;
                michal = michal[entity];
                entity = undefined;
                zuuluu = zuuluu.bind(entity)(michal);
                michal = zuuluu.dispatch;
                entity = {};
                tangon = 'EMOJI_UPLOAD_STOP';
                entity['type'] = tangon;
                tangon = _closure2_slot0;
                entity['guildId'] = tangon;
                entity = michal.bind(zuuluu)(entity);
                entity = argFoo;
                entity = entity.body;
                return entity;
            };
            entity = function(argFoo) {
                zuuluu = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 8;
                michal = michal[entity];
                entity = undefined;
                zuuluu = zuuluu.bind(entity)(michal);
                michal = zuuluu.dispatch;
                entity = {};
                tangon = 'EMOJI_UPLOAD_STOP';
                entity['type'] = tangon;
                tangon = _closure2_slot0;
                entity['guildId'] = tangon;
                entity = michal.bind(zuuluu)(entity);
                entity = global;
                zuuluu = entity.Promise;
                michal = zuuluu.reject;
                entity = argFoo;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['uploadEmoji'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: deleteEmoji
        golfie = argFoo;
        oscard = argBar;
        michal = _closure1_slot1;
        report = _closure1_slot2;
        entity = 8;
        entity = report[entity];
        zuuluu = undefined;
        option = michal.bind(zuuluu)(entity);
        michal = option.dispatch;
        entity = {};
        verify = 'EMOJI_DELETE';
        entity['type'] = verify;
        entity['guildId'] = golfie;
        entity['emojiId'] = oscard;
        entity = michal.bind(option)(entity);
        michal = _closure1_slot0;
        entity = 9;
        entity = report[entity];
        entity = michal.bind(zuuluu)(entity);
        zuuluu = entity.HTTP;
        michal = zuuluu.del;
        entity = {'url': null, 'oldFormErrors': true, 'rejectWithError': false};
        report = _closure1_slot7;
        tangon = report.GUILD_EMOJI;
        tangon = tangon.bind(report)(golfie, oscard);
        entity['url'] = tangon;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    zuuluu['deleteEmoji'] = tangon;
    tangon = function() { // Original name: updateEmoji
        entity = undefined;
        tangon = _closure1_slot10;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['updateEmoji'] = tangon;
    tangon = function(argFoo) { // Original name: favoriteEmoji
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            report = _closure1_slot12;
            entity = undefined;
            tangon = argFoo;
            report = report.bind(entity)(tangon);
            var _closure2_slot0 = report;
            tangon = null;
            if(!(tangon != report)) { _fun00012_ip = 87; continue _fun00011 }
 29:
            report = _closure1_slot0;
            oscard = _closure1_slot2;
            tangon = 6;
            tangon = oscard[tangon];
            tangon = report.bind(entity)(tangon);
            oscard = tangon.FrecencyUserSettingsActionCreators;
            report = oscard.updateAsync;
            zuuluu = _closure1_slot9;
            tangon = zuuluu.INFREQUENT_USER_ACTION;
            zuuluu = 'favoriteEmojis';
            michal = function(argFoo) {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    zuuluu = argFoo;
                    michal = _closure1_slot11;
                    entity = zuuluu.emojis;
                    offset = undefined;
                    entity = michal.bind(offset)(entity);
                    zuuluu['emojis'] = entity;
                    michal = _closure1_slot1;
                    tangon = _closure1_slot2;
                    entity = 14;
                    entity = tangon[entity];
                    tangon = michal.bind(offset)(entity);
                    michal = tangon.size;
                    entity = zuuluu.emojis;
                    michal = michal.bind(tangon)(entity);
                    entity = _closure1_slot8;
                    if(!(!(michal >= entity))) { _fun00014_ip = 129; continue _fun00013 }
 73:
                    report = zuuluu.emojis;
                    tangon = report.includes;
                    entity = _closure2_slot0;
                    entity = tangon.bind(report)(entity);
                    entity = !entity;
                    if(!entity) { _fun00014_ip = 124; continue _fun00013 }
 102:
                    tangon = zuuluu.emojis;
                    zuuluu = tangon.push;
                    michal = _closure2_slot0;
                    michal = zuuluu.bind(tangon)(michal);
                    entity = undefined;
 124:
                    _fun00014_ip = 278; continue _fun00013;
 129:
                    zuuluu = _closure1_slot1;
                    yankee = _closure1_slot2;
                    michal = 15;
                    michal = yankee[michal];
                    tangon = zuuluu.bind(offset)(michal);
                    zuuluu = tangon.show;
                    michal = {};
                    oscard = _closure1_slot0;
                    report = 16;
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
                    verify = _closure1_slot8;
                    report['count'] = verify;
                    report = golfie.bind(option)(oscard, report);
                    michal['body'] = report;
                    michal = zuuluu.bind(tangon)(michal);
                    entity = false;
 278:
                    return entity;
                }
            };
            michal = report.bind(oscard)(zuuluu, michal, tangon);
 87:
            return entity;
        }
    };
    zuuluu['favoriteEmoji'] = tangon;
    michal = function(argFoo) { // Original name: unfavoriteEmoji
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            report = _closure1_slot12;
            entity = undefined;
            tangon = argFoo;
            report = report.bind(entity)(tangon);
            var _closure2_slot0 = report;
            tangon = null;
            if(!(tangon != report)) { _fun00016_ip = 87; continue _fun00015 }
 29:
            report = _closure1_slot0;
            oscard = _closure1_slot2;
            tangon = 6;
            tangon = oscard[tangon];
            tangon = report.bind(entity)(tangon);
            oscard = tangon.FrecencyUserSettingsActionCreators;
            report = oscard.updateAsync;
            zuuluu = _closure1_slot9;
            tangon = zuuluu.INFREQUENT_USER_ACTION;
            zuuluu = 'favoriteEmojis';
            michal = function(argFoo) {
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    zuuluu = argFoo;
                    tangon = _closure1_slot11;
                    michal = zuuluu.emojis;
                    entity = undefined;
                    michal = tangon.bind(entity)(michal);
                    zuuluu['emojis'] = michal;
                    report = zuuluu.emojis;
                    tangon = report.includes;
                    michal = _closure2_slot0;
                    michal = tangon.bind(report)(michal);
                    if(michal) { _fun00018_ip = 59; continue _fun00017 }
 55:
                    michal = false;
                    return michal;
 59:
                    report = zuuluu.emojis;
                    tangon = report.filter;
                    michal = function(argFoo) {
                        michal = _closure2_slot0;
                        entity = argFoo;
                        entity = michal !== entity;
                        return entity;
                    };
                    michal = tangon.bind(report)(michal);
                    zuuluu['emojis'] = michal;
                    return entity;
                }
            };
            michal = report.bind(oscard)(zuuluu, michal, tangon);
 87:
            return entity;
        }
    };
    zuuluu['unfavoriteEmoji'] = michal;
    return entity;
})();