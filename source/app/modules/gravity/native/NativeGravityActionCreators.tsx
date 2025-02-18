// app/modules/gravity/native/NativeGravityActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, michal);
    entity = 0;
    michal = oscard[entity];
    entity = undefined;
    michal = golfie.bind(entity)(michal);
    var _closure1_slot3 = michal;
    michal = 1;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    michal = michal.Endpoints;
    var _closure1_slot4 = michal;
    michal = {};
    tangon = function(argFoo) { // Original name: customScoreGuild
        michal = argFoo;
        zuuluu = michal.guildId;
        var _closure2_slot0 = zuuluu;
        zuuluu = michal.channelScores;
        var _closure2_slot1 = zuuluu;
        michal = michal.guildScore;
        var _closure2_slot2 = michal;
        zuuluu = _closure1_slot3;
        michal = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00002_ip = 468; continue _fun00001 }
 10:
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    michal = 2;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    report = tangon.bind(michal)(zuuluu);
                    tangon = report.icymiEnabled;
                    zuuluu = 'customScores';
                    zuuluu = tangon.bind(report)(zuuluu);
                    if(!zuuluu) { _fun00002_ip = 465; continue _fun00001 }
 58: // try_start_0
                    tangon = _closure1_slot0;
                    report = _closure1_slot2;
                    zuuluu = 3;
                    zuuluu = report[zuuluu];
                    zuuluu = tangon.bind(michal)(zuuluu);
                    report = zuuluu.HTTP;
                    tangon = report.put;
                    zuuluu = {};
                    golfie = _closure1_slot4;
                    golfie = golfie.GRAVITY_CUSTOM_GUILD_SCORES;
                    zuuluu['url'] = golfie;
                    golfie = {};
                    option = _closure2_slot0;
                    golfie['guild_id'] = option;
                    offset = _closure2_slot1;
                    option = null;
                    offset = option == offset;
                    option = undefined;
                    if(offset) { _fun00002_ip = 156; continue _fun00001 }
 133:
                    romeon = _closure2_slot1;
                    yankee = romeon.map;
                    offset = function(argFoo) {
                        entity = argFoo;
                        zuuluu = entity.channelId;
                        michal = entity.score;
                        entity = {};
                        entity['channel_id'] = zuuluu;
                        entity['score'] = michal;
                        return entity;
                    };
                    option = yankee.bind(romeon)(offset);
 156:
                    golfie['channel_scores'] = option;
                    option = _closure2_slot2;
                    golfie['guild_score'] = option;
                    zuuluu['body'] = golfie;
                    golfie = true;
                    zuuluu['rejectWithError'] = golfie;
                    zuuluu = tangon.bind(report)(zuuluu);
                    SaveGenerator(address=191);
 189:
                    return zuuluu;
 191:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(tangon) { _fun00002_ip = 362; continue _fun00001 }
 200:
                    report = _closure1_slot1;
                    romeon = _closure1_slot2;
                    tangon = 4;
                    tangon = romeon[tangon];
                    option = report.bind(michal)(tangon);
                    golfie = option.dispatch;
                    tangon = {};
                    offset = 'GRAVITY_CUSTOM_SCORES_UPDATED';
                    tangon['type'] = offset;
                    offset = _closure2_slot0;
                    tangon['guildId'] = offset;
                    offset = _closure2_slot1;
                    tangon['channelScores'] = offset;
                    verify = _closure2_slot2;
                    tangon['guildScore'] = verify;
                    tangon = golfie.bind(option)(tangon);
                    tangon = 5;
                    tangon = romeon[tangon];
                    golfie = report.bind(michal)(tangon);
                    report = golfie.open;
                    tangon = {};
                    option = 'GravityGuildScore';
                    tangon['key'] = option;
                    yankee = _closure1_slot0;
                    option = 6;
                    verify = romeon[option];
                    verify = yankee.bind(michal)(verify);
                    offset = verify.intl;
                    verify = offset.string;
                    option = romeon[option];
                    option = yankee.bind(michal)(option);
                    option = option.t;
                    option = option.OMdbs7;
                    option = verify.bind(offset)(option);
                    tangon['content'] = option;
                    tangon = report.bind(golfie)(tangon);
 360: // try_end0
                    _fun00002_ip = 465; continue _fun00001;
 362:
                    return zuuluu;
 365: // catch_target0
                    CatchBlockStart(arg_register=2);
                    tangon = _closure1_slot1;
                    offset = _closure1_slot2;
                    zuuluu = 5;
                    zuuluu = offset[zuuluu];
                    report = tangon.bind(michal)(zuuluu);
                    tangon = report.open;
                    zuuluu = {};
                    golfie = 'GravityGuildScore';
                    zuuluu['key'] = golfie;
                    verify = _closure1_slot0;
                    oscard = 6;
                    golfie = offset[oscard];
                    golfie = verify.bind(michal)(golfie);
                    option = golfie.intl;
                    golfie = option.string;
                    oscard = offset[oscard];
                    oscard = verify.bind(michal)(oscard);
                    oscard = oscard.t;
                    oscard = oscard.CG4Hkp;
                    oscard = golfie.bind(option)(oscard);
                    zuuluu['content'] = oscard;
                    zuuluu = tangon.bind(report)(zuuluu);
 465:
                    return michal;
 468:
                    return entity;
                }
            };
            return entity;
        };
        entity = zuuluu.bind(michal)(entity);
        entity = entity.bind(michal)();
        return entity;
    };
    michal['customScoreGuild'] = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/gravity/native/NativeGravityActionCreators.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();