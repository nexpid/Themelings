// app/modules/user_profile/maybeFetchUserProfile.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function() { // Original name: _maybeFetchUserProfile
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    offset = argFoo;
                    update = argBar;
                    mike = arguments[2];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zulu) { _fun00002_ip = 768; continue _fun00001 }
 21:
                    var _closure4_slot0 = offset;
                    zulu = undefined;
                    if(!(mike === zulu)) { _fun00002_ip = 33; continue _fun00001 }
 31:
                    mike = {};
 33:
                    sizing = mike.withMutualGuilds;
                    if(!(sizing === zulu)) { _fun00002_ip = 45; continue _fun00001 }
 43:
                    sizing = false;
 45:
                    backup = mike.withMutualFriendsCount;
                    if(!(backup === zulu)) { _fun00002_ip = 57; continue _fun00001 }
 55:
                    backup = false;
 57:
                    kilo = mike.withMutualFriends;
                    if(!(kilo === zulu)) { _fun00002_ip = 69; continue _fun00001 }
 67:
                    kilo = false;
 69:
                    foxtrot = mike.friendToken;
                    golf = mike.preloadUserBanner;
                    if(!(golf === zulu)) { _fun00002_ip = 89; continue _fun00001 }
 87:
                    golf = true;
 89:
                    oscar = mike.dispatchWait;
                    if(!(oscar === zulu)) { _fun00002_ip = 101; continue _fun00001 }
 99:
                    oscar = false;
 101:
                    result = mike.guildId;
                    output = mike.channelId;
                    yankee = mike.joinRequestId;
                    options = mike.abortSignal;
                    var _closure4_slot1 = zulu;
                    var _closure4_slot2 = zulu;
                    SaveGenerator(address=135);
 133:
                    return zulu;
 135:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(report) { _fun00002_ip = 765; continue _fun00001 }
 144:
                    report = '';
                    if(!(report !== offset)) { _fun00002_ip = 762; continue _fun00001 }
 155:
                    romeo = _closure1_slot6;
                    verify = romeo.isFetchingProfile;
                    verify = verify.bind(romeo)(offset, result);
                    if(verify) { _fun00002_ip = 762; continue _fun00001 }
 180:
                    romeo = _closure1_slot6;
                    verify = romeo.getUserProfile;
                    echo = verify.bind(romeo)(offset);
                    verify = global;
                    romeo = verify.Date;
                    verify = romeo.now;
                    source = verify.bind(romeo)();
                    romeo = null;
                    verify = romeo == echo;
                    control = undefined;
                    if(verify) { _fun00002_ip = 229; continue _fun00001 }
 223:
                    control = echo.lastFetched;
 229:
                    vacuum = romeo != control;
                    verify = 0;
                    if(!vacuum) { _fun00002_ip = 241; continue _fun00001 }
 238:
                    verify = control;
 241:
                    source = source - verify;
                    verify = _closure1_slot7;
                    verify = source >= verify;
                    source = romeo == echo;
                    control = undefined;
                    if(source) { _fun00002_ip = 282; continue _fun00001 }
 262:
                    source = echo.fetchError;
                    vacuum = romeo == source;
                    control = undefined;
                    if(vacuum) { _fun00002_ip = 282; continue _fun00001 }
 277:
                    control = source.status;
 282:
                    source = 404;
                    if(!(source !== control)) { _fun00002_ip = 331; continue _fun00001 }
 292:
                    control = romeo == echo;
                    source = undefined;
                    if(control) { _fun00002_ip = 321; continue _fun00001 }
 301:
                    echo = echo.fetchError;
                    control = romeo == echo;
                    source = undefined;
                    if(control) { _fun00002_ip = 321; continue _fun00001 }
 316:
                    source = echo.status;
 321:
                    echo = 429;
                    if(!(echo === source)) { _fun00002_ip = 337; continue _fun00001 }
 331:
                    if(!verify) { _fun00002_ip = 762; continue _fun00001 }
 337:
                    source = _closure1_slot6;
                    echo = source.getGuildMemberProfile;
                    echo = echo.bind(source)(offset, result);
                    control = _closure1_slot6;
                    source = control.getMutualGuilds;
                    vacuum = source.bind(control)(offset);
                    control = _closure1_slot6;
                    source = control.getMutualFriends;
                    control = source.bind(control)(offset);
                    sequence = _closure1_slot6;
                    source = sequence.getMutualFriendsCount;
                    source = source.bind(sequence)(offset);
                    if(sizing) { _fun00002_ip = 405; continue _fun00001 }
 401:
                    sizing = romeo != result;
 405:
                    if(!(romeo == vacuum)) { _fun00002_ip = 412; continue _fun00001 }
 409:
                    if(sizing) { _fun00002_ip = 440; continue _fun00001 }
 412:
                    if(!(romeo == control)) { _fun00002_ip = 419; continue _fun00001 }
 416:
                    if(kilo) { _fun00002_ip = 440; continue _fun00001 }
 419:
                    if(!(romeo == source)) { _fun00002_ip = 426; continue _fun00001 }
 423:
                    if(backup) { _fun00002_ip = 440; continue _fun00001 }
 426:
                    if(!(romeo != result)) { _fun00002_ip = 434; continue _fun00001 }
 430:
                    if(!(romeo != echo)) { _fun00002_ip = 440; continue _fun00001 }
 434:
                    if(!verify) { _fun00002_ip = 762; continue _fun00001 }
 440:
                    echo = _closure1_slot0;
                    source = _closure1_slot2;
                    verify = 4;
                    verify = source[verify];
                    echo = echo.bind(zulu)(verify);
                    verify = echo.fetchUserProfileEffects;
                    verify = verify.bind(echo)();
                    if(!(romeo != update)) { _fun00002_ip = 505; continue _fun00001 }
 474:
                    echo = _closure1_slot0;
                    source = _closure1_slot2;
                    verify = 5;
                    verify = source[verify];
                    echo = echo.bind(zulu)(verify);
                    verify = echo.maybeFetchColors;
                    verify = verify.bind(echo)(update);
 505:
                    verify = {};
                    verify['withMutualGuilds'] = sizing;
                    verify['withMutualFriends'] = kilo;
                    verify['withMutualFriendsCount'] = backup;
                    verify['friendToken'] = foxtrot;
                    verify['guildId'] = result;
                    verify['joinRequestId'] = yankee;
                    verify['abortSignal'] = options;
                    yankee = romeo == result;
                    options = undefined;
                    if(yankee) { _fun00002_ip = 636; continue _fun00001 }
 550:
                    foxtrot = _closure1_slot0;
                    backup = _closure1_slot2;
                    yankee = 6;
                    yankee = backup[yankee];
                    backup = foxtrot.bind(zulu)(yankee);
                    foxtrot = backup.getVisibleConnectionsRole;
                    yankee = {};
                    sizing = _closure1_slot5;
                    kilo = sizing.getMember;
                    kilo = kilo.bind(sizing)(result, offset);
                    yankee['guildMember'] = kilo;
                    sizing = _closure1_slot4;
                    kilo = sizing.getChannel;
                    kilo = kilo.bind(sizing)(output);
                    yankee['channel'] = kilo;
                    yankee = foxtrot.bind(backup)(yankee);
                    romeo = romeo == yankee;
                    options = undefined;
                    if(romeo) { _fun00002_ip = 636; continue _fun00001 }
 631:
                    options = yankee.id;
 636:
                    verify['connectionsRoleId'] = options;
                    _closure4_slot1 = verify;
                    options = undefined;
                    if(!golf) { _fun00002_ip = 670; continue _fun00001 }
 650:
                    yankee = _closure1_slot1;
                    romeo = _closure1_slot2;
                    golf = 7;
                    golf = romeo[golf];
                    options = yankee.bind(zulu)(golf);
 670:
                    _closure4_slot2 = options;
                    if(oscar) { _fun00002_ip = 723; continue _fun00001 }
 677:
                    golf = _closure1_slot0;
                    yankee = _closure1_slot2;
                    oscar = 9;
                    oscar = yankee[oscar];
                    golf = golf.bind(zulu)(oscar);
                    oscar = golf.fetchProfile;
                    oscar = oscar.bind(golf)(offset, verify, options);
                    SaveGenerator(address=714);
 712:
                    return oscar;
 714:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=6);
                    if(!golf) { _fun00002_ip = 762; continue _fun00001 }
 720:
                    return oscar;
 723:
                    oscar = _closure1_slot1;
                    golf = _closure1_slot2;
                    report = 8;
                    report = golf[report];
                    oscar = oscar.bind(zulu)(report);
                    report = oscar.wait;
                    tango = function() {
                        zulu = _closure1_slot0;
                        mike = _closure1_slot2;
                        entity = 9;
                        mike = mike[entity];
                        entity = undefined;
                        report = zulu.bind(entity)(mike);
                        tango = report.fetchProfile;
                        zulu = _closure4_slot0;
                        mike = _closure4_slot1;
                        entity = _closure4_slot2;
                        entity = tango.bind(report)(zulu, mike, entity);
                        return entity;
                    };
                    tango = report.bind(oscar)(tango);
                    return tango;
 762:
                    return zulu;
 765:
                    return mike;
 768:
                    return entity;
                }
            };
            mike = entity.next;
            mike = mike.bind(entity)();
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot8 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot8 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 60000;
    var _closure1_slot7 = tango;
    tango = 10;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/user_profile/maybeFetchUserProfile.tsx';
    tango = report.bind(oscar)(tango);
    mike = function() { // Original name: maybeFetchUserProfile
        entity = undefined;
        tango = _closure1_slot8;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['default'] = mike;
    return entity;
})();