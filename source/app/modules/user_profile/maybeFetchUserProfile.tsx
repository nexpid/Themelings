// app/modules/user_profile/maybeFetchUserProfile.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function() { // Original name: _maybeFetchUserProfile
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    offset = argFoo;
                    update = argBar;
                    michal = arguments[2];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zuuluu) { _fun00002_ip = 768; continue _fun00001 }
 21:
                    var _closure4_slot0 = offset;
                    zuuluu = undefined;
                    if(!(michal === zuuluu)) { _fun00002_ip = 33; continue _fun00001 }
 31:
                    michal = {};
 33:
                    sizing = michal.withMutualGuilds;
                    if(!(sizing === zuuluu)) { _fun00002_ip = 45; continue _fun00001 }
 43:
                    sizing = false;
 45:
                    backup = michal.withMutualFriendsCount;
                    if(!(backup === zuuluu)) { _fun00002_ip = 57; continue _fun00001 }
 55:
                    backup = false;
 57:
                    kiloes = michal.withMutualFriends;
                    if(!(kiloes === zuuluu)) { _fun00002_ip = 69; continue _fun00001 }
 67:
                    kiloes = false;
 69:
                    foxtra = michal.friendToken;
                    golfie = michal.preloadUserBanner;
                    if(!(golfie === zuuluu)) { _fun00002_ip = 89; continue _fun00001 }
 87:
                    golfie = true;
 89:
                    oscard = michal.dispatchWait;
                    if(!(oscard === zuuluu)) { _fun00002_ip = 101; continue _fun00001 }
 99:
                    oscard = false;
 101:
                    result = michal.guildId;
                    output = michal.channelId;
                    yankee = michal.joinRequestId;
                    option = michal.abortSignal;
                    var _closure4_slot1 = zuuluu;
                    var _closure4_slot2 = zuuluu;
                    SaveGenerator(address=135);
 133:
                    return zuuluu;
 135:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(report) { _fun00002_ip = 765; continue _fun00001 }
 144:
                    report = '';
                    if(!(report !== offset)) { _fun00002_ip = 762; continue _fun00001 }
 155:
                    romeon = _closure1_slot6;
                    verify = romeon.isFetchingProfile;
                    verify = verify.bind(romeon)(offset, result);
                    if(verify) { _fun00002_ip = 762; continue _fun00001 }
 180:
                    romeon = _closure1_slot6;
                    verify = romeon.getUserProfile;
                    echoed = verify.bind(romeon)(offset);
                    verify = global;
                    romeon = verify.Date;
                    verify = romeon.now;
                    source = verify.bind(romeon)();
                    romeon = null;
                    verify = romeon == echoed;
                    ctrled = undefined;
                    if(verify) { _fun00002_ip = 229; continue _fun00001 }
 223:
                    ctrled = echoed.lastFetched;
 229:
                    vacuum = romeon != ctrled;
                    verify = 0;
                    if(!vacuum) { _fun00002_ip = 241; continue _fun00001 }
 238:
                    verify = ctrled;
 241:
                    source = source - verify;
                    verify = _closure1_slot7;
                    verify = source >= verify;
                    source = romeon == echoed;
                    ctrled = undefined;
                    if(source) { _fun00002_ip = 282; continue _fun00001 }
 262:
                    source = echoed.fetchError;
                    vacuum = romeon == source;
                    ctrled = undefined;
                    if(vacuum) { _fun00002_ip = 282; continue _fun00001 }
 277:
                    ctrled = source.status;
 282:
                    source = 404;
                    if(!(source !== ctrled)) { _fun00002_ip = 331; continue _fun00001 }
 292:
                    ctrled = romeon == echoed;
                    source = undefined;
                    if(ctrled) { _fun00002_ip = 321; continue _fun00001 }
 301:
                    echoed = echoed.fetchError;
                    ctrled = romeon == echoed;
                    source = undefined;
                    if(ctrled) { _fun00002_ip = 321; continue _fun00001 }
 316:
                    source = echoed.status;
 321:
                    echoed = 429;
                    if(!(echoed === source)) { _fun00002_ip = 337; continue _fun00001 }
 331:
                    if(!verify) { _fun00002_ip = 762; continue _fun00001 }
 337:
                    source = _closure1_slot6;
                    echoed = source.getGuildMemberProfile;
                    echoed = echoed.bind(source)(offset, result);
                    ctrled = _closure1_slot6;
                    source = ctrled.getMutualGuilds;
                    vacuum = source.bind(ctrled)(offset);
                    ctrled = _closure1_slot6;
                    source = ctrled.getMutualFriends;
                    ctrled = source.bind(ctrled)(offset);
                    sequen = _closure1_slot6;
                    source = sequen.getMutualFriendsCount;
                    source = source.bind(sequen)(offset);
                    if(sizing) { _fun00002_ip = 405; continue _fun00001 }
 401:
                    sizing = romeon != result;
 405:
                    if(!(romeon == vacuum)) { _fun00002_ip = 412; continue _fun00001 }
 409:
                    if(sizing) { _fun00002_ip = 440; continue _fun00001 }
 412:
                    if(!(romeon == ctrled)) { _fun00002_ip = 419; continue _fun00001 }
 416:
                    if(kiloes) { _fun00002_ip = 440; continue _fun00001 }
 419:
                    if(!(romeon == source)) { _fun00002_ip = 426; continue _fun00001 }
 423:
                    if(backup) { _fun00002_ip = 440; continue _fun00001 }
 426:
                    if(!(romeon != result)) { _fun00002_ip = 434; continue _fun00001 }
 430:
                    if(!(romeon != echoed)) { _fun00002_ip = 440; continue _fun00001 }
 434:
                    if(!verify) { _fun00002_ip = 762; continue _fun00001 }
 440:
                    echoed = _closure1_slot0;
                    source = _closure1_slot2;
                    verify = 4;
                    verify = source[verify];
                    echoed = echoed.bind(zuuluu)(verify);
                    verify = echoed.fetchUserProfileEffects;
                    verify = verify.bind(echoed)();
                    if(!(romeon != update)) { _fun00002_ip = 505; continue _fun00001 }
 474:
                    echoed = _closure1_slot0;
                    source = _closure1_slot2;
                    verify = 5;
                    verify = source[verify];
                    echoed = echoed.bind(zuuluu)(verify);
                    verify = echoed.maybeFetchColors;
                    verify = verify.bind(echoed)(update);
 505:
                    verify = {};
                    verify['withMutualGuilds'] = sizing;
                    verify['withMutualFriends'] = kiloes;
                    verify['withMutualFriendsCount'] = backup;
                    verify['friendToken'] = foxtra;
                    verify['guildId'] = result;
                    verify['joinRequestId'] = yankee;
                    verify['abortSignal'] = option;
                    yankee = romeon == result;
                    option = undefined;
                    if(yankee) { _fun00002_ip = 636; continue _fun00001 }
 550:
                    foxtra = _closure1_slot0;
                    backup = _closure1_slot2;
                    yankee = 6;
                    yankee = backup[yankee];
                    backup = foxtra.bind(zuuluu)(yankee);
                    foxtra = backup.getVisibleConnectionsRole;
                    yankee = {};
                    sizing = _closure1_slot5;
                    kiloes = sizing.getMember;
                    kiloes = kiloes.bind(sizing)(result, offset);
                    yankee['guildMember'] = kiloes;
                    sizing = _closure1_slot4;
                    kiloes = sizing.getChannel;
                    kiloes = kiloes.bind(sizing)(output);
                    yankee['channel'] = kiloes;
                    yankee = foxtra.bind(backup)(yankee);
                    romeon = romeon == yankee;
                    option = undefined;
                    if(romeon) { _fun00002_ip = 636; continue _fun00001 }
 631:
                    option = yankee.id;
 636:
                    verify['connectionsRoleId'] = option;
                    _closure4_slot1 = verify;
                    option = undefined;
                    if(!golfie) { _fun00002_ip = 670; continue _fun00001 }
 650:
                    yankee = _closure1_slot1;
                    romeon = _closure1_slot2;
                    golfie = 7;
                    golfie = romeon[golfie];
                    option = yankee.bind(zuuluu)(golfie);
 670:
                    _closure4_slot2 = option;
                    if(oscard) { _fun00002_ip = 723; continue _fun00001 }
 677:
                    golfie = _closure1_slot0;
                    yankee = _closure1_slot2;
                    oscard = 9;
                    oscard = yankee[oscard];
                    golfie = golfie.bind(zuuluu)(oscard);
                    oscard = golfie.fetchProfile;
                    oscard = oscard.bind(golfie)(offset, verify, option);
                    SaveGenerator(address=714);
 712:
                    return oscard;
 714:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=6);
                    if(!golfie) { _fun00002_ip = 762; continue _fun00001 }
 720:
                    return oscard;
 723:
                    oscard = _closure1_slot1;
                    golfie = _closure1_slot2;
                    report = 8;
                    report = golfie[report];
                    oscard = oscard.bind(zuuluu)(report);
                    report = oscard.wait;
                    tangon = function() {
                        zuuluu = _closure1_slot0;
                        michal = _closure1_slot2;
                        entity = 9;
                        michal = michal[entity];
                        entity = undefined;
                        report = zuuluu.bind(entity)(michal);
                        tangon = report.fetchProfile;
                        zuuluu = _closure4_slot0;
                        michal = _closure4_slot1;
                        entity = _closure4_slot2;
                        entity = tangon.bind(report)(zuuluu, michal, entity);
                        return entity;
                    };
                    tangon = report.bind(oscard)(tangon);
                    return tangon;
 762:
                    return zuuluu;
 765:
                    return michal;
 768:
                    return entity;
                }
            };
            michal = entity.next;
            michal = michal.bind(entity)();
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot8 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot8 = entity;
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
    tangon = 60000;
    var _closure1_slot7 = tangon;
    tangon = 10;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/user_profile/maybeFetchUserProfile.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function() { // Original name: maybeFetchUserProfile
        entity = undefined;
        tangon = _closure1_slot8;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['default'] = michal;
    return entity;
})();