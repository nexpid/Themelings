// app/modules/guild_profile/GuildProfileActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    option = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = option;
    var _closure1_slot2 = oscard;
    entity = function() { // Original name: _fetchGuildTopGames
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00002_ip = 140; continue _fun00001 }
 10:
                    tangon = _closure1_slot0;
                    report = _closure1_slot2;
                    michal = 4;
                    michal = report[michal];
                    report = undefined;
                    michal = tangon.bind(report)(michal);
                    oscard = michal.HTTP;
                    tangon = oscard.get;
                    michal = {};
                    verify = _closure1_slot6;
                    option = verify.GUILD_TOP_GAMES;
                    golfie = argFoo;
                    golfie = option.bind(verify)(golfie);
                    michal['url'] = golfie;
                    golfie = false;
                    michal['rejectWithError'] = golfie;
                    michal = tangon.bind(oscard)(michal);
                    SaveGenerator(address=84);
 82:
                    return michal;
 84:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tangon) { _fun00002_ip = 137; continue _fun00001 }
 90:
                    tangon = _closure1_slot0;
                    oscard = _closure1_slot2;
                    zuuluu = 5;
                    zuuluu = oscard[zuuluu];
                    report = tangon.bind(report)(zuuluu);
                    tangon = report.buildTopGamesFromServer;
                    zuuluu = michal.body;
                    zuuluu = zuuluu.top_games;
                    zuuluu = tangon.bind(report)(zuuluu);
                    return zuuluu;
 137:
                    return michal;
 140:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot7 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot7 = entity;
    entity = global;
    verify = entity.Object;
    golfie = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = option.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    golfie = oscard[tangon];
    golfie = option.bind(entity)(golfie);
    var _closure1_slot4 = golfie;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.GuildProfileFetchStatus;
    var _closure1_slot5 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.Endpoints;
    var _closure1_slot6 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/guild_profile/GuildProfileActionCreators.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo, argBar) { // Original name: getGuildProfile
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            offset = argFoo;
            report = argBar;
            var _closure2_slot0 = offset;
            zuuluu = null;
            if(!(zuuluu != offset)) { _fun00004_ip = 316; continue _fun00003 }
 21:
            oscard = _closure1_slot4;
            entity = oscard.getFetchStatus;
            golfie = entity.bind(oscard)(offset);
            entity = _closure1_slot5;
            entity = entity.FETCHING;
            michal = oscard.getLastSyncTimestamp;
            romeon = michal.bind(oscard)(offset);
            michal = oscard.getProfile;
            oscard = michal.bind(oscard)(offset);
            michal = global;
            yankee = michal.Date;
            verify = yankee.now;
            yankee = verify.bind(yankee)();
            foxtra = zuuluu != romeon;
            verify = 0;
            if(!foxtra) { _fun00004_ip = 102; continue _fun00003 }
 99:
            verify = romeon;
 102:
            verify = yankee - verify;
            if(!(golfie === entity)) { _fun00004_ip = 135; continue _fun00003 }
 110:
            if(report) { _fun00004_ip = 135; continue _fun00003 }
 113:
            golfie = michal.Promise;
            entity = golfie.resolve;
            entity = entity.bind(golfie)(zuuluu);
            _fun00004_ip = 314; continue _fun00003;
 135:
            if(!(zuuluu != oscard)) { _fun00004_ip = 174; continue _fun00003 }
 139:
            golfie = 60000;
            if(!(!(verify > golfie))) { _fun00004_ip = 174; continue _fun00003 }
 149:
            if(report) { _fun00004_ip = 174; continue _fun00003 }
 152:
            report = michal.Promise;
            michal = report.resolve;
            michal = michal.bind(report)(oscard);
            _fun00004_ip = 311; continue _fun00003;
 174:
            oscard = _closure1_slot1;
            verify = _closure1_slot2;
            report = 3;
            report = verify[report];
            golfie = undefined;
            yankee = oscard.bind(golfie)(report);
            oscard = yankee.dispatch;
            report = {};
            romeon = 'GUILD_PROFILE_FETCH';
            report['type'] = romeon;
            report['guildId'] = offset;
            report = oscard.bind(yankee)(report);
            oscard = _closure1_slot0;
            report = 4;
            report = verify[report];
            report = oscard.bind(golfie)(report);
            golfie = report.HTTP;
            oscard = golfie.get;
            report = {};
            verify = _closure1_slot6;
            option = verify.GUILD_PROFILE;
            option = option.bind(verify)(offset);
            report['url'] = option;
            option = false;
            report['rejectWithError'] = option;
            golfie = oscard.bind(golfie)(report);
            oscard = golfie.then;
            report = function(argFoo) {
                zuuluu = _closure1_slot0;
                report = _closure1_slot2;
                entity = 5;
                entity = report[entity];
                tangon = undefined;
                oscard = zuuluu.bind(tangon)(entity);
                zuuluu = oscard.buildGuildProfileFromServer;
                entity = argFoo;
                entity = entity.body;
                entity = zuuluu.bind(oscard)(entity);
                zuuluu = _closure1_slot1;
                michal = 3;
                michal = report[michal];
                tangon = zuuluu.bind(tangon)(michal);
                zuuluu = tangon.dispatch;
                michal = {};
                report = 'GUILD_PROFILE_FETCH_SUCCESS';
                michal['type'] = report;
                report = _closure2_slot0;
                michal['guildId'] = report;
                michal['profile'] = entity;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            oscard = oscard.bind(golfie)(report);
            report = oscard.catch;
            tangon = function(argFoo) {
                tangon = _closure1_slot0;
                report = _closure1_slot2;
                michal = 6;
                michal = report[michal];
                zuuluu = undefined;
                michal = tangon.bind(zuuluu)(michal);
                oscard = michal.APIError;
                michal = oscard.prototype;
                tangon = Object.create(michal, {constructor: {value: oscard}});
                golfie = argFoo;
                option = tangon;
                michal = new option[oscard](golfie, oscard);
                tangon = michal instanceof Object ? michal : tangon;
                michal = _closure1_slot1;
                entity = 3;
                entity = report[entity];
                zuuluu = michal.bind(zuuluu)(entity);
                michal = zuuluu.dispatch;
                entity = {};
                report = 'GUILD_PROFILE_FETCH_FAILURE';
                entity['type'] = report;
                report = _closure2_slot0;
                entity['guildId'] = report;
                entity['error'] = tangon;
                entity = michal.bind(zuuluu)(entity);
                entity = null;
                return entity;
            };
            michal = report.bind(oscard)(tangon);
 311:
            entity = michal;
 314:
            return entity;
 316:
            entity = global;
            michal = entity.Promise;
            entity = michal.resolve;
            entity = entity.bind(michal)(zuuluu);
            return entity;
        }
    };
    zuuluu['getGuildProfile'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: saveGuildProfile
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            yankee = argFoo;
            golfie = argBar;
            var _closure2_slot0 = yankee;
            zuuluu = _closure1_slot4;
            michal = zuuluu.getIsUpdating;
            michal = michal.bind(zuuluu)(yankee);
            if(michal) { _fun00006_ip = 208; continue _fun00005 }
 38:
            zuuluu = _closure1_slot1;
            verify = _closure1_slot2;
            michal = 3;
            michal = verify[michal];
            option = undefined;
            tangon = zuuluu.bind(option)(michal);
            zuuluu = tangon.dispatch;
            michal = {};
            oscard = 'GUILD_PROFILE_UPDATE';
            michal['type'] = oscard;
            michal['guildId'] = yankee;
            michal['updates'] = golfie;
            michal = zuuluu.bind(tangon)(michal);
            oscard = _closure1_slot0;
            michal = 4;
            michal = verify[michal];
            michal = oscard.bind(option)(michal);
            tangon = michal.HTTP;
            zuuluu = tangon.patch;
            michal = {};
            offset = _closure1_slot6;
            report = offset.GUILD_PROFILE;
            report = report.bind(offset)(yankee);
            michal['url'] = report;
            report = 5;
            report = verify[report];
            oscard = oscard.bind(option)(report);
            report = oscard.buildGuildProfileUpdateForServer;
            report = report.bind(oscard)(golfie);
            michal['body'] = report;
            report = false;
            michal['rejectWithError'] = report;
            tangon = zuuluu.bind(tangon)(michal);
            zuuluu = tangon.then;
            michal = function(argFoo) {
                zuuluu = _closure1_slot0;
                report = _closure1_slot2;
                entity = 5;
                entity = report[entity];
                tangon = undefined;
                oscard = zuuluu.bind(tangon)(entity);
                zuuluu = oscard.buildGuildProfileFromServer;
                entity = argFoo;
                entity = entity.body;
                entity = zuuluu.bind(oscard)(entity);
                zuuluu = _closure1_slot1;
                michal = 3;
                michal = report[michal];
                tangon = zuuluu.bind(tangon)(michal);
                zuuluu = tangon.dispatch;
                michal = {};
                report = 'GUILD_PROFILE_UPDATE_SUCCESS';
                michal['type'] = report;
                report = _closure2_slot0;
                michal['guildId'] = report;
                michal['profile'] = entity;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = zuuluu.catch;
            entity = function(argFoo) {
                tangon = _closure1_slot0;
                report = _closure1_slot2;
                michal = 6;
                michal = report[michal];
                zuuluu = undefined;
                michal = tangon.bind(zuuluu)(michal);
                oscard = michal.APIError;
                michal = oscard.prototype;
                tangon = Object.create(michal, {constructor: {value: oscard}});
                golfie = argFoo;
                option = tangon;
                michal = new option[oscard](golfie, oscard);
                tangon = michal instanceof Object ? michal : tangon;
                michal = _closure1_slot1;
                entity = 3;
                entity = report[entity];
                zuuluu = michal.bind(zuuluu)(entity);
                michal = zuuluu.dispatch;
                entity = {};
                report = 'GUILD_PROFILE_UPDATE_FAILURE';
                entity['type'] = report;
                report = _closure2_slot0;
                entity['guildId'] = report;
                entity['error'] = tangon;
                entity = michal.bind(zuuluu)(entity);
                entity = null;
                return entity;
            };
            entity = michal.bind(zuuluu)(entity);
            _fun00006_ip = 229; continue _fun00005;
 208:
            michal = global;
            tangon = michal.Promise;
            zuuluu = tangon.resolve;
            michal = null;
            entity = zuuluu.bind(tangon)(michal);
 229:
            return entity;
        }
    };
    zuuluu['saveGuildProfile'] = tangon;
    michal = function() { // Original name: fetchGuildTopGames
        entity = undefined;
        tangon = _closure1_slot7;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['fetchGuildTopGames'] = michal;
    return entity;
})();