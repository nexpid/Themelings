// app/modules/guild_mod_dash_member_safety/MemberSafetySupplementalUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    golf = argBar;
    report = argBaz;
    zulu = argFred;
    options = argPlugh;
    var _closure1_slot0 = golf;
    var _closure1_slot1 = report;
    var _closure1_slot2 = options;
    entity = function(argFoo, argBar) { // Original name: pendingMemberRequestKey
        mike = argFoo;
        entity = argBar;
        entity = mike + entity;
        return entity;
    };
    var _closure1_slot9 = entity;
    entity = function(argFoo, argBar) { // Original name: createFetchKeys
        zulu = argBar;
        mike = argFoo;
        var _closure2_slot0 = mike;
        mike = zulu.map;
        entity = function(argFoo) {
            tango = _closure1_slot9;
            zulu = _closure2_slot0;
            mike = undefined;
            entity = argFoo;
            entity = tango.bind(mike)(zulu, entity);
            return entity;
        };
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    var _closure1_slot10 = entity;
    entity = function(argFoo) { // Original name: getUserIdFromFetchKey
        zulu = argFoo;
        mike = zulu.split;
        entity = '-';
        mike = mike.bind(zulu)(entity);
        entity = 1;
        entity = mike[entity];
        return entity;
    };
    var _closure1_slot11 = entity;
    entity = function(argFoo, argBar) { // Original name: updateFetchRequests
        zulu = argFoo;
        mike = argBar;
        var _closure2_slot0 = mike;
        mike = zulu.forEach;
        entity = function(argFoo) {
            zulu = _closure1_slot5;
            mike = _closure2_slot0;
            entity = argFoo;
            zulu[entity] = mike;
            entity = undefined;
            return entity;
        };
        entity = mike.bind(zulu)(entity);
        entity = undefined;
        return entity;
    };
    var _closure1_slot12 = entity;
    entity = function(argFoo) { // Original name: _transformFetchMemberSupplementalResponse
        mike = argFoo;
        entity = {};
        zulu = mike.user_id;
        entity['userId'] = zulu;
        zulu = mike.source_invite_code;
        entity['sourceInviteCode'] = zulu;
        zulu = mike.join_source_type;
        entity['joinSourceType'] = zulu;
        zulu = mike.inviter_id;
        entity['inviterId'] = zulu;
        mike = mike.integration_type;
        entity['integrationType'] = mike;
        return entity;
    };
    var _closure1_slot13 = entity;
    entity = function() { // Original name: _fetchMemberSupplemental
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    offset = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00002_ip = 405; continue _fun00001 }
 15:
                    options = offset;
                    report = undefined;
                    zulu = undefined;
                    yankee = undefined;
                    oscar = undefined;
                    var _closure4_slot0 = report;
                    verify = _closure1_slot10;
                    tango = argBar;
                    verify = verify.bind(report)(offset, tango);
                    zulu = verify;
                    tango = function(argFoo) { // Original name: getFetchchableUsers
                        zulu = argFoo;
                        mike = zulu.filter;
                        entity = function(argFoo) {
                            zulu = _closure1_slot5;
                            mike = argFoo;
                            mike = zulu[mike];
                            entity = _closure1_slot6;
                            entity = entity.UNFETCHED;
                            entity = mike <= entity;
                            return entity;
                        };
                        zulu = mike.bind(zulu)(entity);
                        mike = zulu.map;
                        entity = _closure1_slot11;
                        entity = mike.bind(zulu)(entity);
                        return entity;
                    };
                    tango = tango.bind(report)(verify);
                    yankee = tango;
                    verify = tango.length;
                    tango = 0;
                    if(!(tango !== verify)) { _fun00002_ip = 398; continue _fun00001 }
 76:
                    offset = _closure1_slot12;
                    verify = zulu;
                    tango = _closure1_slot6;
                    tango = tango.PENDING;
                    tango = offset.bind(report)(verify, tango);
 99: // try_start_0
                    verify = _closure1_slot0;
                    offset = _closure1_slot2;
                    tango = 7;
                    tango = offset[tango];
                    tango = verify.bind(report)(tango);
                    offset = tango.HTTP;
                    verify = offset.post;
                    tango = {};
                    backup = _closure1_slot4;
                    foxtrot = backup.MEMBER_SAFETY_SUPPLEMENTAL;
                    romeo = options;
                    romeo = foxtrot.bind(backup)(romeo);
                    tango['url'] = romeo;
                    romeo = {};
                    foxtrot = yankee;
                    romeo['user_ids'] = foxtrot;
                    tango['body'] = romeo;
                    romeo = true;
                    tango['rejectWithError'] = romeo;
                    tango = verify.bind(offset)(tango);
                    SaveGenerator(address=183);
 181:
                    return tango;
 183:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=8);
                    if(verify) { _fun00002_ip = 366; continue _fun00001 }
 192:
                    oscar = tango;
                    verify = global;
                    romeo = verify.Array;
                    offset = romeo.isArray;
                    verify = tango.body;
                    verify = offset.bind(romeo)(verify);
                    if(verify) { _fun00002_ip = 251; continue _fun00001 }
 221:
                    romeo = _closure1_slot12;
                    offset = zulu;
                    verify = _closure1_slot6;
                    verify = verify.FAILED;
                    verify = romeo.bind(report)(offset, verify);
 244: // try_end0
                    verify = new Array(0);
                    return verify;
 251: // try_start_1
                    offset = oscar.body;
                    verify = offset.map;
                    oscar = _closure1_slot13;
                    oscar = verify.bind(offset)(oscar);
                    offset = new Array(0);
                    _closure4_slot0 = offset;
                    romeo = oscar.forEach;
                    verify = function(argFoo) {
                        entity = argFoo;
                        zulu = entity.userId;
                        mike = _closure4_slot0;
                        entity = mike.push;
                        entity = entity.bind(mike)(zulu);
                        return entity;
                    };
                    verify = romeo.bind(oscar)(verify);
                    verify = _closure1_slot10;
                    offset = verify.bind(report)(options, offset);
                    romeo = yankee;
                    yankee = romeo.filter;
                    golf = function(argFoo) {
                        zulu = _closure4_slot0;
                        mike = zulu.includes;
                        entity = argFoo;
                        entity = mike.bind(zulu)(entity);
                        entity = !entity;
                        return entity;
                    };
                    golf = yankee.bind(romeo)(golf);
                    verify = verify.bind(report)(options, golf);
                    options = _closure1_slot12;
                    golf = _closure1_slot6;
                    golf = golf.SUCCEEDED;
                    golf = options.bind(report)(offset, golf);
                    golf = _closure1_slot6;
                    golf = golf.FAILED;
                    golf = options.bind(report)(verify, golf);
 363: // try_end1
                    return oscar;
 366:
                    return tango;
 369: // catch_target0 // catch_target1
                    CatchBlockStart(arg_register=3);
                    tango = _closure1_slot12;
                    mike = _closure1_slot6;
                    mike = mike.FAILED;
                    mike = tango.bind(report)(zulu, mike);
                    mike = new Array(0);
                    return mike;
 398:
                    mike = new Array(0);
                    return mike;
 405:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot14 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot14 = entity;
    entity = global;
    verify = entity.Object;
    oscar = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = oscar.bind(verify)(zulu, entity, tango);
    romeo = 0;
    tango = options[romeo];
    entity = undefined;
    tango = report.bind(entity)(tango);
    var _closure1_slot3 = tango;
    yankee = 1;
    tango = options[yankee];
    tango = golf.bind(entity)(tango);
    tango = tango.Endpoints;
    var _closure1_slot4 = tango;
    tango = {};
    var _closure1_slot5 = tango;
    tango = {};
    tango['FAILED'] = romeo;
    report = 'FAILED';
    tango[romeo] = report;
    tango['UNFETCHED'] = yankee;
    report = 'UNFETCHED';
    tango[yankee] = report;
    offset = 2;
    tango['PENDING'] = offset;
    report = 'PENDING';
    tango[offset] = report;
    verify = 3;
    tango['SUCCEEDED'] = verify;
    report = 'SUCCEEDED';
    tango[verify] = report;
    oscar = 4;
    tango['FAILED_NO_RETRY'] = oscar;
    report = 'FAILED_NO_RETRY';
    tango[oscar] = report;
    var _closure1_slot6 = tango;
    report = {};
    report['UNSPECIFIED'] = romeo;
    tango = 'UNSPECIFIED';
    report[romeo] = tango;
    report['BOT'] = yankee;
    tango = 'BOT';
    report[yankee] = tango;
    report['INTEGRATION'] = offset;
    tango = 'INTEGRATION';
    report[offset] = tango;
    report['DISCOVERY'] = verify;
    tango = 'DISCOVERY';
    report[verify] = tango;
    report['HUB'] = oscar;
    tango = 'HUB';
    report[oscar] = tango;
    oscar = 5;
    report['INVITE'] = oscar;
    tango = 'INVITE';
    report[oscar] = tango;
    oscar = 6;
    report['VANITY_URL'] = oscar;
    tango = 'VANITY_URL';
    report[oscar] = tango;
    oscar = 7;
    report['MANUAL_MEMBER_VERIFICATION'] = oscar;
    tango = 'MANUAL_MEMBER_VERIFICATION';
    report[oscar] = tango;
    var _closure1_slot7 = report;
    tango = {};
    oscar = 'discord';
    tango['DISCORD'] = oscar;
    oscar = 'twitch';
    tango['TWITCH'] = oscar;
    oscar = 'youtube';
    tango['YOUTUBE'] = oscar;
    oscar = 'guild_subscription';
    tango['GUILD_SUBSCRIPTION'] = oscar;
    var _closure1_slot8 = tango;
    oscar = 8;
    oscar = options[oscar];
    options = golf.bind(entity)(oscar);
    golf = options.fileFinishedImporting;
    oscar = 'modules/guild_mod_dash_member_safety/MemberSafetySupplementalUtils.tsx';
    oscar = golf.bind(options)(oscar);
    oscar = function(argFoo, argBar) { // Original name: registerFetchedSupplementals
        zulu = argBar;
        mike = argFoo;
        var _closure2_slot0 = mike;
        mike = zulu.forEach;
        entity = function(argFoo) {
            oscar = _closure2_slot0;
            mike = _closure1_slot6;
            tango = mike.SUCCEEDED;
            zulu = _closure1_slot5;
            report = _closure1_slot9;
            entity = undefined;
            mike = argFoo;
            mike = report.bind(entity)(oscar, mike);
            zulu[mike] = tango;
            return entity;
        };
        entity = mike.bind(zulu)(entity);
        entity = undefined;
        return entity;
    };
    zulu['registerFetchedSupplementals'] = oscar;
    zulu['JoinSourceType'] = report;
    report = function(argFoo) {
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            tango = argFoo;
            golf = arguments[1];
            mike = arguments[2];
            report = undefined;
            if(!(golf === report)) { _fun00004_ip = 17; continue _fun00003 }
 15:
            golf = undefined;
 17:
            if(!(mike === report)) { _fun00004_ip = 23; continue _fun00003 }
 21:
            mike = false;
 23:
            zulu = _closure1_slot7;
            zulu = zulu.BOT;
            if(!(zulu !== tango)) { _fun00004_ip = 617; continue _fun00003 }
 43:
            zulu = _closure1_slot7;
            zulu = zulu.INTEGRATION;
            if(!(zulu !== tango)) { _fun00004_ip = 560; continue _fun00003 }
 60:
            zulu = _closure1_slot7;
            zulu = zulu.DISCOVERY;
            if(!(zulu !== tango)) { _fun00004_ip = 503; continue _fun00003 }
 77:
            zulu = _closure1_slot7;
            zulu = zulu.HUB;
            if(!(zulu !== tango)) { _fun00004_ip = 446; continue _fun00003 }
 94:
            zulu = _closure1_slot7;
            zulu = zulu.INVITE;
            if(!(zulu !== tango)) { _fun00004_ip = 389; continue _fun00003 }
 111:
            zulu = _closure1_slot7;
            zulu = zulu.VANITY_URL;
            if(!(zulu !== tango)) { _fun00004_ip = 256; continue _fun00003 }
 128:
            zulu = _closure1_slot7;
            zulu = zulu.MANUAL_MEMBER_VERIFICATION;
            if(!(zulu !== tango)) { _fun00004_ip = 199; continue _fun00003 }
 142:
            options = _closure1_slot0;
            verify = _closure1_slot2;
            zulu = 2;
            tango = verify[zulu];
            tango = options.bind(report)(tango);
            oscar = tango.intl;
            tango = oscar.string;
            zulu = verify[zulu];
            zulu = options.bind(report)(zulu);
            zulu = zulu.t;
            zulu = zulu.DvMBkZ;
            zulu = tango.bind(oscar)(zulu);
            return zulu;
 199:
            options = _closure1_slot0;
            verify = _closure1_slot2;
            zulu = 2;
            tango = verify[zulu];
            tango = options.bind(report)(tango);
            oscar = tango.intl;
            tango = oscar.string;
            zulu = verify[zulu];
            zulu = options.bind(report)(zulu);
            zulu = zulu.t;
            zulu = zulu.vdu7oa;
            zulu = tango.bind(oscar)(zulu);
            return zulu;
 256:
            zulu = null;
            if(!(zulu != golf)) { _fun00004_ip = 332; continue _fun00003 }
 262:
            if(mike) { _fun00004_ip = 332; continue _fun00003 }
 265:
            zulu = _closure1_slot0;
            options = _closure1_slot2;
            mike = 2;
            tango = options[mike];
            tango = zulu.bind(report)(tango);
            oscar = tango.intl;
            tango = oscar.formatToPlainString;
            mike = options[mike];
            mike = zulu.bind(report)(mike);
            mike = mike.t;
            zulu = mike.EIUjR0;
            mike = {};
            mike['vanityUrl'] = golf;
            mike = tango.bind(oscar)(zulu, mike);
            _fun00004_ip = 387; continue _fun00003;
 332:
            golf = _closure1_slot0;
            options = _closure1_slot2;
            zulu = 2;
            tango = options[zulu];
            tango = golf.bind(report)(tango);
            oscar = tango.intl;
            tango = oscar.string;
            zulu = options[zulu];
            zulu = golf.bind(report)(zulu);
            zulu = zulu.t;
            zulu = zulu.dGiD1N;
            mike = tango.bind(oscar)(zulu);
 387:
            return mike;
 389:
            oscar = _closure1_slot0;
            golf = _closure1_slot2;
            mike = 2;
            zulu = golf[mike];
            zulu = oscar.bind(report)(zulu);
            tango = zulu.intl;
            zulu = tango.string;
            mike = golf[mike];
            mike = oscar.bind(report)(mike);
            mike = mike.t;
            mike = mike./3vIRU;
            mike = zulu.bind(tango)(mike);
            return mike;
 446:
            oscar = _closure1_slot0;
            golf = _closure1_slot2;
            mike = 2;
            zulu = golf[mike];
            zulu = oscar.bind(report)(zulu);
            tango = zulu.intl;
            zulu = tango.string;
            mike = golf[mike];
            mike = oscar.bind(report)(mike);
            mike = mike.t;
            mike = mike.Op8B3N;
            mike = zulu.bind(tango)(mike);
            return mike;
 503:
            oscar = _closure1_slot0;
            golf = _closure1_slot2;
            mike = 2;
            zulu = golf[mike];
            zulu = oscar.bind(report)(zulu);
            tango = zulu.intl;
            zulu = tango.string;
            mike = golf[mike];
            mike = oscar.bind(report)(mike);
            mike = mike.t;
            mike = mike.Ql/e9f;
            mike = zulu.bind(tango)(mike);
            return mike;
 560:
            oscar = _closure1_slot0;
            golf = _closure1_slot2;
            mike = 2;
            zulu = golf[mike];
            zulu = oscar.bind(report)(zulu);
            tango = zulu.intl;
            zulu = tango.string;
            mike = golf[mike];
            mike = oscar.bind(report)(mike);
            mike = mike.t;
            mike = mike.gmCUFx;
            mike = zulu.bind(tango)(mike);
            return mike;
 617:
            tango = _closure1_slot0;
            oscar = _closure1_slot2;
            entity = 2;
            mike = oscar[entity];
            mike = tango.bind(report)(mike);
            zulu = mike.intl;
            mike = zulu.string;
            entity = oscar[entity];
            entity = tango.bind(report)(entity);
            entity = entity.t;
            entity = entity.HumZAg;
            entity = mike.bind(zulu)(entity);
            return entity;
        }
    };
    zulu['getJoinSourceTypeLabel'] = report;
    zulu['IntegrationType'] = tango;
    tango = function(argFoo) {
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            zulu = argFoo;
            mike = _closure1_slot8;
            mike = mike.TWITCH;
            if(!(mike !== zulu)) { _fun00006_ip = 155; continue _fun00005 }
 23:
            mike = _closure1_slot8;
            mike = mike.YOUTUBE;
            if(!(mike !== zulu)) { _fun00006_ip = 96; continue _fun00005 }
 37:
            oscar = _closure1_slot0;
            golf = _closure1_slot2;
            mike = 2;
            zulu = golf[mike];
            report = undefined;
            zulu = oscar.bind(report)(zulu);
            tango = zulu.intl;
            zulu = tango.string;
            mike = golf[mike];
            mike = oscar.bind(report)(mike);
            mike = mike.t;
            mike = mike.gmCUFx;
            mike = zulu.bind(tango)(mike);
            return mike;
 96:
            oscar = _closure1_slot0;
            golf = _closure1_slot2;
            mike = 2;
            zulu = golf[mike];
            report = undefined;
            zulu = oscar.bind(report)(zulu);
            tango = zulu.intl;
            zulu = tango.string;
            mike = golf[mike];
            mike = oscar.bind(report)(mike);
            mike = mike.t;
            mike = mike.PHSAsr;
            mike = zulu.bind(tango)(mike);
            return mike;
 155:
            report = _closure1_slot0;
            oscar = _closure1_slot2;
            entity = 2;
            mike = oscar[entity];
            tango = undefined;
            mike = report.bind(tango)(mike);
            zulu = mike.intl;
            mike = zulu.string;
            entity = oscar[entity];
            entity = report.bind(tango)(entity);
            entity = entity.t;
            entity = entity.AVGAk5;
            entity = mike.bind(zulu)(entity);
            return entity;
        }
    };
    zulu['getIntegrationLabel'] = tango;
    tango = function(argFoo) {
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            verify = argFoo;
            tango = _closure1_slot1;
            report = _closure1_slot2;
            entity = 3;
            entity = report[entity];
            oscar = undefined;
            golf = tango.bind(oscar)(entity);
            mike = golf.get;
            options = _closure1_slot0;
            entity = 4;
            entity = report[entity];
            options = options.bind(oscar)(entity);
            entity = options.useLegacyPlatformType;
            entity = entity.bind(options)(verify);
            mike = mike.bind(golf)(entity);
            entity = 5;
            entity = report[entity];
            entity = tango.bind(oscar)(entity);
            report = entity.bind(oscar)();
            golf = null;
            tango = golf != mike;
            entity = null;
            if(!tango) { _fun00008_ip = 222; continue _fun00007 }
 95:
            tango = _closure1_slot8;
            offset = tango.TWITCH;
            options = new Array(2);
            options[0] = offset;
            tango = tango.YOUTUBE;
            options[1] = tango;
            tango = options.includes;
            tango = tango.bind(options)(verify);
            entity = null;
            if(!tango) { _fun00008_ip = 222; continue _fun00007 }
 138:
            tango = _closure1_slot0;
            golf = _closure1_slot2;
            zulu = 6;
            zulu = golf[zulu];
            tango = tango.bind(oscar)(zulu);
            zulu = tango.isThemeDark;
            zulu = zulu.bind(tango)(report);
            mike = mike.icon;
            if(zulu) { _fun00008_ip = 185; continue _fun00007 }
 177:
            report = mike.lightSVG;
            _fun00008_ip = 191; continue _fun00007;
 185:
            report = mike.darkSVG;
 191:
            mike = global;
            mike = mike.HermesInternal;
            tango = mike.concat;
            zulu = "url('";
            mike = "')";
            entity = tango.bind(zulu)(report, mike);
 222:
            return entity;
        }
    };
    zulu['useGetIntegrationIconString'] = tango;
    mike = function() { // Original name: fetchMemberSupplemental
        entity = undefined;
        tango = _closure1_slot14;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['fetchMemberSupplemental'] = mike;
    return entity;
})();