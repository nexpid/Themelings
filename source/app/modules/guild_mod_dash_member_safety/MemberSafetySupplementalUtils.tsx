// app/modules/guild_mod_dash_member_safety/MemberSafetySupplementalUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    golfie = argBar;
    report = argBaz;
    zuuluu = argFre;
    option = argPlu;
    var _closure1_slot0 = golfie;
    var _closure1_slot1 = report;
    var _closure1_slot2 = option;
    entity = function(argFoo, argBar) { // Original name: pendingMemberRequestKey
        michal = argFoo;
        entity = argBar;
        entity = michal + entity;
        return entity;
    };
    var _closure1_slot9 = entity;
    entity = function(argFoo, argBar) { // Original name: createFetchKeys
        zuuluu = argBar;
        michal = argFoo;
        var _closure2_slot0 = michal;
        michal = zuuluu.map;
        entity = function(argFoo) {
            tangon = _closure1_slot9;
            zuuluu = _closure2_slot0;
            michal = undefined;
            entity = argFoo;
            entity = tangon.bind(michal)(zuuluu, entity);
            return entity;
        };
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    var _closure1_slot10 = entity;
    entity = function(argFoo) { // Original name: getUserIdFromFetchKey
        zuuluu = argFoo;
        michal = zuuluu.split;
        entity = '-';
        michal = michal.bind(zuuluu)(entity);
        entity = 1;
        entity = michal[entity];
        return entity;
    };
    var _closure1_slot11 = entity;
    entity = function(argFoo, argBar) { // Original name: updateFetchRequests
        zuuluu = argFoo;
        michal = argBar;
        var _closure2_slot0 = michal;
        michal = zuuluu.forEach;
        entity = function(argFoo) {
            zuuluu = _closure1_slot5;
            michal = _closure2_slot0;
            entity = argFoo;
            zuuluu[entity] = michal;
            entity = undefined;
            return entity;
        };
        entity = michal.bind(zuuluu)(entity);
        entity = undefined;
        return entity;
    };
    var _closure1_slot12 = entity;
    entity = function(argFoo) { // Original name: _transformFetchMemberSupplementalResponse
        michal = argFoo;
        entity = {};
        zuuluu = michal.user_id;
        entity['userId'] = zuuluu;
        zuuluu = michal.source_invite_code;
        entity['sourceInviteCode'] = zuuluu;
        zuuluu = michal.join_source_type;
        entity['joinSourceType'] = zuuluu;
        zuuluu = michal.inviter_id;
        entity['inviterId'] = zuuluu;
        michal = michal.integration_type;
        entity['integrationType'] = michal;
        return entity;
    };
    var _closure1_slot13 = entity;
    entity = function() { // Original name: _fetchMemberSupplemental
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    offset = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00002_ip = 405; continue _fun00001 }
 15:
                    option = offset;
                    report = undefined;
                    zuuluu = undefined;
                    yankee = undefined;
                    oscard = undefined;
                    var _closure4_slot0 = report;
                    verify = _closure1_slot10;
                    tangon = argBar;
                    verify = verify.bind(report)(offset, tangon);
                    zuuluu = verify;
                    tangon = function(argFoo) { // Original name: getFetchchableUsers
                        zuuluu = argFoo;
                        michal = zuuluu.filter;
                        entity = function(argFoo) {
                            zuuluu = _closure1_slot5;
                            michal = argFoo;
                            michal = zuuluu[michal];
                            entity = _closure1_slot6;
                            entity = entity.UNFETCHED;
                            entity = michal <= entity;
                            return entity;
                        };
                        zuuluu = michal.bind(zuuluu)(entity);
                        michal = zuuluu.map;
                        entity = _closure1_slot11;
                        entity = michal.bind(zuuluu)(entity);
                        return entity;
                    };
                    tangon = tangon.bind(report)(verify);
                    yankee = tangon;
                    verify = tangon.length;
                    tangon = 0;
                    if(!(tangon !== verify)) { _fun00002_ip = 398; continue _fun00001 }
 76:
                    offset = _closure1_slot12;
                    verify = zuuluu;
                    tangon = _closure1_slot6;
                    tangon = tangon.PENDING;
                    tangon = offset.bind(report)(verify, tangon);
 99: // try_start_0
                    verify = _closure1_slot0;
                    offset = _closure1_slot2;
                    tangon = 7;
                    tangon = offset[tangon];
                    tangon = verify.bind(report)(tangon);
                    offset = tangon.HTTP;
                    verify = offset.post;
                    tangon = {};
                    backup = _closure1_slot4;
                    foxtra = backup.MEMBER_SAFETY_SUPPLEMENTAL;
                    romeon = option;
                    romeon = foxtra.bind(backup)(romeon);
                    tangon['url'] = romeon;
                    romeon = {};
                    foxtra = yankee;
                    romeon['user_ids'] = foxtra;
                    tangon['body'] = romeon;
                    romeon = true;
                    tangon['rejectWithError'] = romeon;
                    tangon = verify.bind(offset)(tangon);
                    SaveGenerator(address=183);
 181:
                    return tangon;
 183:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=8);
                    if(verify) { _fun00002_ip = 366; continue _fun00001 }
 192:
                    oscard = tangon;
                    verify = global;
                    romeon = verify.Array;
                    offset = romeon.isArray;
                    verify = tangon.body;
                    verify = offset.bind(romeon)(verify);
                    if(verify) { _fun00002_ip = 251; continue _fun00001 }
 221:
                    romeon = _closure1_slot12;
                    offset = zuuluu;
                    verify = _closure1_slot6;
                    verify = verify.FAILED;
                    verify = romeon.bind(report)(offset, verify);
 244: // try_end0
                    verify = new Array(0);
                    return verify;
 251: // try_start_1
                    offset = oscard.body;
                    verify = offset.map;
                    oscard = _closure1_slot13;
                    oscard = verify.bind(offset)(oscard);
                    offset = new Array(0);
                    _closure4_slot0 = offset;
                    romeon = oscard.forEach;
                    verify = function(argFoo) {
                        entity = argFoo;
                        zuuluu = entity.userId;
                        michal = _closure4_slot0;
                        entity = michal.push;
                        entity = entity.bind(michal)(zuuluu);
                        return entity;
                    };
                    verify = romeon.bind(oscard)(verify);
                    verify = _closure1_slot10;
                    offset = verify.bind(report)(option, offset);
                    romeon = yankee;
                    yankee = romeon.filter;
                    golfie = function(argFoo) {
                        zuuluu = _closure4_slot0;
                        michal = zuuluu.includes;
                        entity = argFoo;
                        entity = michal.bind(zuuluu)(entity);
                        entity = !entity;
                        return entity;
                    };
                    golfie = yankee.bind(romeon)(golfie);
                    verify = verify.bind(report)(option, golfie);
                    option = _closure1_slot12;
                    golfie = _closure1_slot6;
                    golfie = golfie.SUCCEEDED;
                    golfie = option.bind(report)(offset, golfie);
                    golfie = _closure1_slot6;
                    golfie = golfie.FAILED;
                    golfie = option.bind(report)(verify, golfie);
 363: // try_end1
                    return oscard;
 366:
                    return tangon;
 369: // catch_target0 // catch_target1
                    CatchBlockStart(arg_register=3);
                    tangon = _closure1_slot12;
                    michal = _closure1_slot6;
                    michal = michal.FAILED;
                    michal = tangon.bind(report)(zuuluu, michal);
                    michal = new Array(0);
                    return michal;
 398:
                    michal = new Array(0);
                    return michal;
 405:
                    return entity;
                }
            };
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
    entity = global;
    verify = entity.Object;
    oscard = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = oscard.bind(verify)(zuuluu, entity, tangon);
    romeon = 0;
    tangon = option[romeon];
    entity = undefined;
    tangon = report.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    yankee = 1;
    tangon = option[yankee];
    tangon = golfie.bind(entity)(tangon);
    tangon = tangon.Endpoints;
    var _closure1_slot4 = tangon;
    tangon = {};
    var _closure1_slot5 = tangon;
    tangon = {};
    tangon['FAILED'] = romeon;
    report = 'FAILED';
    tangon[romeon] = report;
    tangon['UNFETCHED'] = yankee;
    report = 'UNFETCHED';
    tangon[yankee] = report;
    offset = 2;
    tangon['PENDING'] = offset;
    report = 'PENDING';
    tangon[offset] = report;
    verify = 3;
    tangon['SUCCEEDED'] = verify;
    report = 'SUCCEEDED';
    tangon[verify] = report;
    oscard = 4;
    tangon['FAILED_NO_RETRY'] = oscard;
    report = 'FAILED_NO_RETRY';
    tangon[oscard] = report;
    var _closure1_slot6 = tangon;
    report = {};
    report['UNSPECIFIED'] = romeon;
    tangon = 'UNSPECIFIED';
    report[romeon] = tangon;
    report['BOT'] = yankee;
    tangon = 'BOT';
    report[yankee] = tangon;
    report['INTEGRATION'] = offset;
    tangon = 'INTEGRATION';
    report[offset] = tangon;
    report['DISCOVERY'] = verify;
    tangon = 'DISCOVERY';
    report[verify] = tangon;
    report['HUB'] = oscard;
    tangon = 'HUB';
    report[oscard] = tangon;
    oscard = 5;
    report['INVITE'] = oscard;
    tangon = 'INVITE';
    report[oscard] = tangon;
    oscard = 6;
    report['VANITY_URL'] = oscard;
    tangon = 'VANITY_URL';
    report[oscard] = tangon;
    oscard = 7;
    report['MANUAL_MEMBER_VERIFICATION'] = oscard;
    tangon = 'MANUAL_MEMBER_VERIFICATION';
    report[oscard] = tangon;
    var _closure1_slot7 = report;
    tangon = {};
    oscard = 'discord';
    tangon['DISCORD'] = oscard;
    oscard = 'twitch';
    tangon['TWITCH'] = oscard;
    oscard = 'youtube';
    tangon['YOUTUBE'] = oscard;
    oscard = 'guild_subscription';
    tangon['GUILD_SUBSCRIPTION'] = oscard;
    var _closure1_slot8 = tangon;
    oscard = 8;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'modules/guild_mod_dash_member_safety/MemberSafetySupplementalUtils.tsx';
    oscard = golfie.bind(option)(oscard);
    oscard = function(argFoo, argBar) { // Original name: registerFetchedSupplementals
        zuuluu = argBar;
        michal = argFoo;
        var _closure2_slot0 = michal;
        michal = zuuluu.forEach;
        entity = function(argFoo) {
            oscard = _closure2_slot0;
            michal = _closure1_slot6;
            tangon = michal.SUCCEEDED;
            zuuluu = _closure1_slot5;
            report = _closure1_slot9;
            entity = undefined;
            michal = argFoo;
            michal = report.bind(entity)(oscard, michal);
            zuuluu[michal] = tangon;
            return entity;
        };
        entity = michal.bind(zuuluu)(entity);
        entity = undefined;
        return entity;
    };
    zuuluu['registerFetchedSupplementals'] = oscard;
    zuuluu['JoinSourceType'] = report;
    report = function(argFoo) {
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            tangon = argFoo;
            golfie = arguments[1];
            michal = arguments[2];
            report = undefined;
            if(!(golfie === report)) { _fun00004_ip = 17; continue _fun00003 }
 15:
            golfie = undefined;
 17:
            if(!(michal === report)) { _fun00004_ip = 23; continue _fun00003 }
 21:
            michal = false;
 23:
            zuuluu = _closure1_slot7;
            zuuluu = zuuluu.BOT;
            if(!(zuuluu !== tangon)) { _fun00004_ip = 631; continue _fun00003 }
 43:
            zuuluu = _closure1_slot7;
            zuuluu = zuuluu.INTEGRATION;
            if(!(zuuluu !== tangon)) { _fun00004_ip = 574; continue _fun00003 }
 60:
            zuuluu = _closure1_slot7;
            zuuluu = zuuluu.DISCOVERY;
            if(!(zuuluu !== tangon)) { _fun00004_ip = 515; continue _fun00003 }
 77:
            zuuluu = _closure1_slot7;
            zuuluu = zuuluu.HUB;
            if(!(zuuluu !== tangon)) { _fun00004_ip = 456; continue _fun00003 }
 94:
            zuuluu = _closure1_slot7;
            zuuluu = zuuluu.INVITE;
            if(!(zuuluu !== tangon)) { _fun00004_ip = 397; continue _fun00003 }
 111:
            zuuluu = _closure1_slot7;
            zuuluu = zuuluu.VANITY_URL;
            if(!(zuuluu !== tangon)) { _fun00004_ip = 260; continue _fun00003 }
 128:
            zuuluu = _closure1_slot7;
            zuuluu = zuuluu.MANUAL_MEMBER_VERIFICATION;
            if(!(zuuluu !== tangon)) { _fun00004_ip = 201; continue _fun00003 }
 142:
            option = _closure1_slot0;
            verify = _closure1_slot2;
            zuuluu = 2;
            tangon = verify[zuuluu];
            tangon = option.bind(report)(tangon);
            oscard = tangon.intl;
            tangon = oscard.string;
            zuuluu = verify[zuuluu];
            zuuluu = option.bind(report)(zuuluu);
            zuuluu = zuuluu.t;
            zuuluu = zuuluu.DvMBkZ;
            zuuluu = tangon.bind(oscard)(zuuluu);
            return zuuluu;
 201:
            option = _closure1_slot0;
            verify = _closure1_slot2;
            zuuluu = 2;
            tangon = verify[zuuluu];
            tangon = option.bind(report)(tangon);
            oscard = tangon.intl;
            tangon = oscard.string;
            zuuluu = verify[zuuluu];
            zuuluu = option.bind(report)(zuuluu);
            zuuluu = zuuluu.t;
            zuuluu = zuuluu.vdu7oa;
            zuuluu = tangon.bind(oscard)(zuuluu);
            return zuuluu;
 260:
            zuuluu = null;
            if(!(zuuluu != golfie)) { _fun00004_ip = 338; continue _fun00003 }
 266:
            if(michal) { _fun00004_ip = 338; continue _fun00003 }
 269:
            zuuluu = _closure1_slot0;
            option = _closure1_slot2;
            michal = 2;
            tangon = option[michal];
            tangon = zuuluu.bind(report)(tangon);
            oscard = tangon.intl;
            tangon = oscard.formatToPlainString;
            michal = option[michal];
            michal = zuuluu.bind(report)(michal);
            michal = michal.t;
            zuuluu = michal.EIUjR0;
            michal = {};
            michal['vanityUrl'] = golfie;
            michal = tangon.bind(oscard)(zuuluu, michal);
            _fun00004_ip = 395; continue _fun00003;
 338:
            golfie = _closure1_slot0;
            option = _closure1_slot2;
            zuuluu = 2;
            tangon = option[zuuluu];
            tangon = golfie.bind(report)(tangon);
            oscard = tangon.intl;
            tangon = oscard.string;
            zuuluu = option[zuuluu];
            zuuluu = golfie.bind(report)(zuuluu);
            zuuluu = zuuluu.t;
            zuuluu = zuuluu.dGiD1N;
            michal = tangon.bind(oscard)(zuuluu);
 395:
            return michal;
 397:
            oscard = _closure1_slot0;
            golfie = _closure1_slot2;
            michal = 2;
            zuuluu = golfie[michal];
            zuuluu = oscard.bind(report)(zuuluu);
            tangon = zuuluu.intl;
            zuuluu = tangon.string;
            michal = golfie[michal];
            michal = oscard.bind(report)(michal);
            michal = michal.t;
            michal = michal./3vIRU;
            michal = zuuluu.bind(tangon)(michal);
            return michal;
 456:
            oscard = _closure1_slot0;
            golfie = _closure1_slot2;
            michal = 2;
            zuuluu = golfie[michal];
            zuuluu = oscard.bind(report)(zuuluu);
            tangon = zuuluu.intl;
            zuuluu = tangon.string;
            michal = golfie[michal];
            michal = oscard.bind(report)(michal);
            michal = michal.t;
            michal = michal.Op8B3N;
            michal = zuuluu.bind(tangon)(michal);
            return michal;
 515:
            oscard = _closure1_slot0;
            golfie = _closure1_slot2;
            michal = 2;
            zuuluu = golfie[michal];
            zuuluu = oscard.bind(report)(zuuluu);
            tangon = zuuluu.intl;
            zuuluu = tangon.string;
            michal = golfie[michal];
            michal = oscard.bind(report)(michal);
            michal = michal.t;
            michal = michal.Ql/e9f;
            michal = zuuluu.bind(tangon)(michal);
            return michal;
 574:
            oscard = _closure1_slot0;
            golfie = _closure1_slot2;
            michal = 2;
            zuuluu = golfie[michal];
            zuuluu = oscard.bind(report)(zuuluu);
            tangon = zuuluu.intl;
            zuuluu = tangon.string;
            michal = golfie[michal];
            michal = oscard.bind(report)(michal);
            michal = michal.t;
            michal = michal.gmCUFx;
            michal = zuuluu.bind(tangon)(michal);
            return michal;
 631:
            tangon = _closure1_slot0;
            oscard = _closure1_slot2;
            entity = 2;
            michal = oscard[entity];
            michal = tangon.bind(report)(michal);
            zuuluu = michal.intl;
            michal = zuuluu.string;
            entity = oscard[entity];
            entity = tangon.bind(report)(entity);
            entity = entity.t;
            entity = entity.HumZAg;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        }
    };
    zuuluu['getJoinSourceTypeLabel'] = report;
    zuuluu['IntegrationType'] = tangon;
    tangon = function(argFoo) {
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            zuuluu = argFoo;
            michal = _closure1_slot8;
            michal = michal.TWITCH;
            if(!(michal !== zuuluu)) { _fun00006_ip = 157; continue _fun00005 }
 23:
            michal = _closure1_slot8;
            michal = michal.YOUTUBE;
            if(!(michal !== zuuluu)) { _fun00006_ip = 96; continue _fun00005 }
 37:
            oscard = _closure1_slot0;
            golfie = _closure1_slot2;
            michal = 2;
            zuuluu = golfie[michal];
            report = undefined;
            zuuluu = oscard.bind(report)(zuuluu);
            tangon = zuuluu.intl;
            zuuluu = tangon.string;
            michal = golfie[michal];
            michal = oscard.bind(report)(michal);
            michal = michal.t;
            michal = michal.gmCUFx;
            michal = zuuluu.bind(tangon)(michal);
            return michal;
 96:
            oscard = _closure1_slot0;
            golfie = _closure1_slot2;
            michal = 2;
            zuuluu = golfie[michal];
            report = undefined;
            zuuluu = oscard.bind(report)(zuuluu);
            tangon = zuuluu.intl;
            zuuluu = tangon.string;
            michal = golfie[michal];
            michal = oscard.bind(report)(michal);
            michal = michal.t;
            michal = michal.PHSAsr;
            michal = zuuluu.bind(tangon)(michal);
            return michal;
 157:
            report = _closure1_slot0;
            oscard = _closure1_slot2;
            entity = 2;
            michal = oscard[entity];
            tangon = undefined;
            michal = report.bind(tangon)(michal);
            zuuluu = michal.intl;
            michal = zuuluu.string;
            entity = oscard[entity];
            entity = report.bind(tangon)(entity);
            entity = entity.t;
            entity = entity.AVGAk5;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        }
    };
    zuuluu['getIntegrationLabel'] = tangon;
    tangon = function(argFoo) {
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            verify = argFoo;
            tangon = _closure1_slot1;
            report = _closure1_slot2;
            entity = 3;
            entity = report[entity];
            oscard = undefined;
            golfie = tangon.bind(oscard)(entity);
            michal = golfie.get;
            option = _closure1_slot0;
            entity = 4;
            entity = report[entity];
            option = option.bind(oscard)(entity);
            entity = option.useLegacyPlatformType;
            entity = entity.bind(option)(verify);
            michal = michal.bind(golfie)(entity);
            entity = 5;
            entity = report[entity];
            entity = tangon.bind(oscard)(entity);
            report = entity.bind(oscard)();
            golfie = null;
            tangon = golfie != michal;
            entity = null;
            if(!tangon) { _fun00008_ip = 222; continue _fun00007 }
 95:
            tangon = _closure1_slot8;
            offset = tangon.TWITCH;
            option = new Array(2);
            option[0] = offset;
            tangon = tangon.YOUTUBE;
            option[1] = tangon;
            tangon = option.includes;
            tangon = tangon.bind(option)(verify);
            entity = null;
            if(!tangon) { _fun00008_ip = 222; continue _fun00007 }
 138:
            tangon = _closure1_slot0;
            golfie = _closure1_slot2;
            zuuluu = 6;
            zuuluu = golfie[zuuluu];
            tangon = tangon.bind(oscard)(zuuluu);
            zuuluu = tangon.isThemeDark;
            zuuluu = zuuluu.bind(tangon)(report);
            michal = michal.icon;
            if(zuuluu) { _fun00008_ip = 185; continue _fun00007 }
 177:
            report = michal.lightSVG;
            _fun00008_ip = 191; continue _fun00007;
 185:
            report = michal.darkSVG;
 191:
            michal = global;
            michal = michal.HermesInternal;
            tangon = michal.concat;
            zuuluu = "url('";
            michal = "')";
            entity = tangon.bind(zuuluu)(report, michal);
 222:
            return entity;
        }
    };
    zuuluu['useGetIntegrationIconString'] = tangon;
    michal = function() { // Original name: fetchMemberSupplemental
        entity = undefined;
        tangon = _closure1_slot14;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['fetchMemberSupplemental'] = michal;
    return entity;
})();