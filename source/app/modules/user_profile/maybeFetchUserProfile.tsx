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
                    source = argBar;
                    michal = arguments[2];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zuuluu) { _fun00002_ip = 777; continue _fun00001 }
 21:
                    var _closure4_slot0 = offset;
                    zuuluu = undefined;
                    if(!(michal === zuuluu)) { _fun00002_ip = 33; continue _fun00001 }
 31:
                    michal = {};
 33:
                    echoed = michal.type;
                    sizing = michal.withMutualGuilds;
                    if(!(sizing === zuuluu)) { _fun00002_ip = 50; continue _fun00001 }
 48:
                    sizing = false;
 50:
                    backup = michal.withMutualFriendsCount;
                    if(!(backup === zuuluu)) { _fun00002_ip = 62; continue _fun00001 }
 60:
                    backup = false;
 62:
                    kiloes = michal.withMutualFriends;
                    if(!(kiloes === zuuluu)) { _fun00002_ip = 74; continue _fun00001 }
 72:
                    kiloes = false;
 74:
                    foxtra = michal.friendToken;
                    golfie = michal.preloadUserBanner;
                    if(!(golfie === zuuluu)) { _fun00002_ip = 94; continue _fun00001 }
 92:
                    golfie = true;
 94:
                    oscard = michal.dispatchWait;
                    if(!(oscard === zuuluu)) { _fun00002_ip = 106; continue _fun00001 }
 104:
                    oscard = false;
 106:
                    result = michal.guildId;
                    output = michal.channelId;
                    yankee = michal.joinRequestId;
                    option = michal.abortSignal;
                    var _closure4_slot1 = zuuluu;
                    var _closure4_slot2 = zuuluu;
                    SaveGenerator(address=140);
 138:
                    return zuuluu;
 140:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(report) { _fun00002_ip = 774; continue _fun00001 }
 149:
                    report = '';
                    if(!(report !== offset)) { _fun00002_ip = 771; continue _fun00001 }
 160:
                    romeon = _closure1_slot6;
                    verify = romeon.isFetchingProfile;
                    verify = verify.bind(romeon)(offset, result);
                    if(verify) { _fun00002_ip = 771; continue _fun00001 }
 185:
                    romeon = _closure1_slot6;
                    verify = romeon.getUserProfile;
                    update = verify.bind(romeon)(offset);
                    verify = global;
                    romeon = verify.Date;
                    verify = romeon.now;
                    ctrled = verify.bind(romeon)();
                    romeon = null;
                    verify = romeon == update;
                    vacuum = undefined;
                    if(verify) { _fun00002_ip = 234; continue _fun00001 }
 228:
                    vacuum = update.lastFetched;
 234:
                    sequen = romeon != vacuum;
                    verify = 0;
                    if(!sequen) { _fun00002_ip = 246; continue _fun00001 }
 243:
                    verify = vacuum;
 246:
                    ctrled = ctrled - verify;
                    verify = _closure1_slot7;
                    verify = ctrled >= verify;
                    ctrled = romeon == update;
                    vacuum = undefined;
                    if(ctrled) { _fun00002_ip = 287; continue _fun00001 }
 267:
                    ctrled = update.fetchError;
                    sequen = romeon == ctrled;
                    vacuum = undefined;
                    if(sequen) { _fun00002_ip = 287; continue _fun00001 }
 282:
                    vacuum = ctrled.status;
 287:
                    ctrled = 404;
                    if(!(ctrled !== vacuum)) { _fun00002_ip = 336; continue _fun00001 }
 297:
                    vacuum = romeon == update;
                    ctrled = undefined;
                    if(vacuum) { _fun00002_ip = 326; continue _fun00001 }
 306:
                    update = update.fetchError;
                    vacuum = romeon == update;
                    ctrled = undefined;
                    if(vacuum) { _fun00002_ip = 326; continue _fun00001 }
 321:
                    ctrled = update.status;
 326:
                    update = 429;
                    if(!(update === ctrled)) { _fun00002_ip = 342; continue _fun00001 }
 336:
                    if(!verify) { _fun00002_ip = 771; continue _fun00001 }
 342:
                    ctrled = _closure1_slot6;
                    update = ctrled.getGuildMemberProfile;
                    update = update.bind(ctrled)(offset, result);
                    vacuum = _closure1_slot6;
                    ctrled = vacuum.getMutualGuilds;
                    sequen = ctrled.bind(vacuum)(offset);
                    vacuum = _closure1_slot6;
                    ctrled = vacuum.getMutualFriends;
                    vacuum = ctrled.bind(vacuum)(offset);
                    config = _closure1_slot6;
                    ctrled = config.getMutualFriendsCount;
                    ctrled = ctrled.bind(config)(offset);
                    if(sizing) { _fun00002_ip = 410; continue _fun00001 }
 406:
                    sizing = romeon != result;
 410:
                    if(!(romeon == sequen)) { _fun00002_ip = 417; continue _fun00001 }
 414:
                    if(sizing) { _fun00002_ip = 445; continue _fun00001 }
 417:
                    if(!(romeon == vacuum)) { _fun00002_ip = 424; continue _fun00001 }
 421:
                    if(kiloes) { _fun00002_ip = 445; continue _fun00001 }
 424:
                    if(!(romeon == ctrled)) { _fun00002_ip = 431; continue _fun00001 }
 428:
                    if(backup) { _fun00002_ip = 445; continue _fun00001 }
 431:
                    if(!(romeon != result)) { _fun00002_ip = 439; continue _fun00001 }
 435:
                    if(!(romeon != update)) { _fun00002_ip = 445; continue _fun00001 }
 439:
                    if(!verify) { _fun00002_ip = 771; continue _fun00001 }
 445:
                    update = _closure1_slot0;
                    ctrled = _closure1_slot2;
                    verify = 4;
                    verify = ctrled[verify];
                    update = update.bind(zuuluu)(verify);
                    verify = update.fetchUserProfileEffects;
                    verify = verify.bind(update)();
                    if(!(romeon != source)) { _fun00002_ip = 510; continue _fun00001 }
 479:
                    update = _closure1_slot0;
                    ctrled = _closure1_slot2;
                    verify = 5;
                    verify = ctrled[verify];
                    update = update.bind(zuuluu)(verify);
                    verify = update.maybeFetchColors;
                    verify = verify.bind(update)(source);
 510:
                    verify = {};
                    verify['type'] = echoed;
                    verify['withMutualGuilds'] = sizing;
                    verify['withMutualFriends'] = kiloes;
                    verify['withMutualFriendsCount'] = backup;
                    verify['friendToken'] = foxtra;
                    verify['guildId'] = result;
                    verify['joinRequestId'] = yankee;
                    verify['abortSignal'] = option;
                    yankee = romeon == result;
                    option = undefined;
                    if(yankee) { _fun00002_ip = 645; continue _fun00001 }
 559:
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
                    if(romeon) { _fun00002_ip = 645; continue _fun00001 }
 640:
                    option = yankee.id;
 645:
                    verify['connectionsRoleId'] = option;
                    _closure4_slot1 = verify;
                    option = undefined;
                    if(!golfie) { _fun00002_ip = 679; continue _fun00001 }
 659:
                    yankee = _closure1_slot1;
                    romeon = _closure1_slot2;
                    golfie = 7;
                    golfie = romeon[golfie];
                    option = yankee.bind(zuuluu)(golfie);
 679:
                    _closure4_slot2 = option;
                    if(oscard) { _fun00002_ip = 732; continue _fun00001 }
 686:
                    golfie = _closure1_slot0;
                    yankee = _closure1_slot2;
                    oscard = 9;
                    oscard = yankee[oscard];
                    golfie = golfie.bind(zuuluu)(oscard);
                    oscard = golfie.fetchProfile;
                    oscard = oscard.bind(golfie)(offset, verify, option);
                    SaveGenerator(address=723);
 721:
                    return oscard;
 723:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=6);
                    if(!golfie) { _fun00002_ip = 771; continue _fun00001 }
 729:
                    return oscard;
 732:
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
 771:
                    return zuuluu;
 774:
                    return michal;
 777:
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