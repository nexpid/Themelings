// app/modules/gravity/native/NativeGravityActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, mike);
    entity = 0;
    mike = oscar[entity];
    entity = undefined;
    mike = golf.bind(entity)(mike);
    var _closure1_slot3 = mike;
    mike = 1;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    mike = mike.Endpoints;
    var _closure1_slot4 = mike;
    mike = {};
    tango = function(argFoo) { // Original name: customScoreGuild
        mike = argFoo;
        zulu = mike.guildId;
        var _closure2_slot0 = zulu;
        zulu = mike.channelScores;
        var _closure2_slot1 = zulu;
        mike = mike.guildScore;
        var _closure2_slot2 = mike;
        zulu = _closure1_slot3;
        mike = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun117002: for(var _fun117002_ip = 0; ; ) switch(_fun117002_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun117002_ip = 466; continue _fun117002 }
 10:
                    tango = _closure1_slot0;
                    zulu = _closure1_slot2;
                    mike = 2;
                    zulu = zulu[mike];
                    mike = undefined;
                    report = tango.bind(mike)(zulu);
                    tango = report.icymiEnabled;
                    zulu = 'customScores';
                    zulu = tango.bind(report)(zulu);
                    if(!zulu) { _fun117002_ip = 463; continue _fun117002 }
 58: // try_start_0
                    tango = _closure1_slot0;
                    report = _closure1_slot2;
                    zulu = 3;
                    zulu = report[zulu];
                    zulu = tango.bind(mike)(zulu);
                    report = zulu.HTTP;
                    tango = report.put;
                    zulu = {};
                    golf = _closure1_slot4;
                    golf = golf.GRAVITY_CUSTOM_GUILD_SCORES;
                    zulu['url'] = golf;
                    golf = {};
                    options = _closure2_slot0;
                    golf['guild_id'] = options;
                    offset = _closure2_slot1;
                    options = null;
                    offset = options == offset;
                    options = undefined;
                    if(offset) { _fun117002_ip = 156; continue _fun117002 }
 133:
                    romeo = _closure2_slot1;
                    yankee = romeo.map;
                    offset = function(argFoo) {
                        entity = argFoo;
                        zulu = entity.channelId;
                        mike = entity.score;
                        entity = {};
                        entity['channel_id'] = zulu;
                        entity['score'] = mike;
                        return entity;
                    };
                    options = yankee.bind(romeo)(offset);
 156:
                    golf['channel_scores'] = options;
                    options = _closure2_slot2;
                    golf['guild_score'] = options;
                    zulu['body'] = golf;
                    golf = true;
                    zulu['rejectWithError'] = golf;
                    zulu = tango.bind(report)(zulu);
                    SaveGenerator(address=191);
 189:
                    return zulu;
 191:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(tango) { _fun117002_ip = 360; continue _fun117002 }
 200:
                    report = _closure1_slot1;
                    romeo = _closure1_slot2;
                    tango = 4;
                    tango = romeo[tango];
                    options = report.bind(mike)(tango);
                    golf = options.dispatch;
                    tango = {};
                    offset = 'GRAVITY_CUSTOM_SCORES_UPDATED';
                    tango['type'] = offset;
                    offset = _closure2_slot0;
                    tango['guildId'] = offset;
                    offset = _closure2_slot1;
                    tango['channelScores'] = offset;
                    verify = _closure2_slot2;
                    tango['guildScore'] = verify;
                    tango = golf.bind(options)(tango);
                    tango = 5;
                    tango = romeo[tango];
                    golf = report.bind(mike)(tango);
                    report = golf.open;
                    tango = {};
                    options = 'GravityGuildScore';
                    tango['key'] = options;
                    yankee = _closure1_slot0;
                    options = 6;
                    verify = romeo[options];
                    verify = yankee.bind(mike)(verify);
                    offset = verify.intl;
                    verify = offset.string;
                    options = romeo[options];
                    options = yankee.bind(mike)(options);
                    options = options.t;
                    options = options.OMdbs7;
                    options = verify.bind(offset)(options);
                    tango['content'] = options;
                    tango = report.bind(golf)(tango);
 358: // try_end0
                    _fun117002_ip = 463; continue _fun117002;
 360:
                    return zulu;
 363: // catch_target0
                    CatchBlockStart(arg_register=2);
                    tango = _closure1_slot1;
                    offset = _closure1_slot2;
                    zulu = 5;
                    zulu = offset[zulu];
                    report = tango.bind(mike)(zulu);
                    tango = report.open;
                    zulu = {};
                    golf = 'GravityGuildScore';
                    zulu['key'] = golf;
                    verify = _closure1_slot0;
                    oscar = 6;
                    golf = offset[oscar];
                    golf = verify.bind(mike)(golf);
                    options = golf.intl;
                    golf = options.string;
                    oscar = offset[oscar];
                    oscar = verify.bind(mike)(oscar);
                    oscar = oscar.t;
                    oscar = oscar.CG4Hkp;
                    oscar = golf.bind(options)(oscar);
                    zulu['content'] = oscar;
                    zulu = tango.bind(report)(zulu);
 463:
                    return mike;
 466:
                    return entity;
                }
            };
            return entity;
        };
        entity = zulu.bind(mike)(entity);
        entity = entity.bind(mike)();
        return entity;
    };
    mike['customScoreGuild'] = tango;
    tango = 7;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/gravity/native/NativeGravityActionCreators.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();