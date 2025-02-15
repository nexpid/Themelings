// app/modules/guild_onboarding/doGuildOnboarding.native.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function() { // Original name: _doGuildOnboarding
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00002_ip = 303; continue _fun00001 }
 12:
                    mike = argFoo;
                    verify = mike.guildId;
                    golf = undefined;
                    SaveGenerator(address=26);
 24:
                    return golf;
 26:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun00002_ip = 300; continue _fun00001 }
 35:
                    tango = _closure1_slot1;
                    options = _closure1_slot2;
                    zulu = 7;
                    zulu = options[zulu];
                    offset = tango.bind(golf)(zulu);
                    zulu = offset.hideActionSheet;
                    zulu = zulu.bind(offset)();
                    zulu = 8;
                    zulu = options[zulu];
                    tango = tango.bind(golf)(zulu);
                    zulu = tango.popAll;
                    zulu = zulu.bind(tango)();
                    tango = _closure1_slot0;
                    zulu = 9;
                    zulu = options[zulu];
                    tango = tango.bind(golf)(zulu);
                    zulu = tango.waitForGuild;
                    zulu = zulu.bind(tango)(verify);
                    SaveGenerator(address=121);
 119:
                    return zulu;
 121:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(tango) { _fun00002_ip = 297; continue _fun00001 }
 130:
                    options = zulu.hasFeature;
                    tango = _closure1_slot8;
                    tango = tango.GUILD_ONBOARDING;
                    tango = options.bind(zulu)(tango);
                    if(!tango) { _fun00002_ip = 175; continue _fun00001 }
 154:
                    offset = zulu.hasFeature;
                    options = _closure1_slot8;
                    options = options.COMMUNITY;
                    tango = offset.bind(zulu)(options);
 175:
                    if(!tango) { _fun00002_ip = 285; continue _fun00001 }
 178:
                    options = _closure1_slot0;
                    offset = _closure1_slot2;
                    tango = 10;
                    tango = offset[tango];
                    options = options.bind(golf)(tango);
                    tango = options.maybeFetchOnboardingPrompts;
                    tango = tango.bind(options)(verify);
                    SaveGenerator(address=213);
 211:
                    return tango;
 213:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=7);
                    if(options) { _fun00002_ip = 294; continue _fun00001 }
 219:
                    offset = _closure1_slot6;
                    options = offset.shouldShowOnboarding;
                    options = options.bind(offset)(verify);
                    if(!options) { _fun00002_ip = 285; continue _fun00001 }
 237:
                    options = _closure1_slot12;
                    report = function() { // Original name: fetchLandingAsset
                        entity = undefined;
                        tango = _closure1_slot14;
                        zulu = tango.apply;
                        entity = arguments;
                        mike = entity;
                        entity = this;
                        entity = zulu.bind(tango)(entity, mike);
                        return entity;
                    };
                    report = report.bind(golf)(zulu);
                    SaveGenerator(address=255);
 253:
                    return report;
 255:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=9);
                    if(offset) { _fun00002_ip = 291; continue _fun00001 }
 261:
                    options[verify] = report;
                    oscar = function(argFoo) { // Original name: openAndWaitForOnboarding
                        mike = argFoo;
                        var _closure5_slot0 = mike;
                        tango = _closure1_slot15;
                        zulu = mike.id;
                        mike = undefined;
                        mike = tango.bind(mike)(zulu);
                        mike = global;
                        zulu = mike.Promise;
                        mike = zulu.prototype;
                        mike = Object.create(mike, {constructor: {value: zulu}});
                        report = function(argFoo) {
                            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                                tango = _closure1_slot11;
                                entity = _closure5_slot0;
                                entity = entity.id;
                                tango = tango[entity];
                                entity = null;
                                if(!(entity == tango)) { _fun00004_ip = 51; continue _fun00003 }
 31:
                                report = _closure1_slot11;
                                entity = _closure5_slot0;
                                tango = entity.id;
                                entity = argFoo;
                                report[tango] = entity;
 51:
                                oscar = _closure1_slot1;
                                tango = _closure1_slot2;
                                entity = 8;
                                report = tango[entity];
                                entity = undefined;
                                golf = oscar.bind(entity)(report);
                                oscar = golf.pushLazy;
                                verify = _closure1_slot0;
                                report = 17;
                                report = tango[report];
                                verify = verify.bind(entity)(report);
                                report = 16;
                                report = tango[report];
                                tango = tango.paths;
                                report = verify.bind(entity)(report, tango);
                                tango = {};
                                verify = _closure5_slot0;
                                options = verify.id;
                                tango['guildId'] = options;
                                options = true;
                                tango['backShouldLeaveGuild'] = options;
                                offset = function() { // Original name: onFinish
                                    entity = undefined;
                                    return entity;
                                };
                                tango['onFinish'] = offset;
                                offset = _closure1_slot12;
                                verify = verify.id;
                                verify = offset[verify];
                                tango['landingAnimation'] = verify;
                                tango['isFirstOpen'] = options;
                                zulu = _closure1_slot7;
                                tango = oscar.bind(golf)(report, tango, zulu);
                                zulu = tango.then;
                                mike = function() {
                                    _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                                        mike = _closure1_slot5;
                                        entity = mike.getGuildId;
                                        zulu = entity.bind(mike)();
                                        mike = _closure5_slot0;
                                        mike = mike.id;
                                        if(!(zulu !== mike)) { _fun00006_ip = 90; continue _fun00005 }
 33:
                                        report = _closure1_slot0;
                                        zulu = _closure1_slot2;
                                        mike = 18;
                                        zulu = zulu[mike];
                                        mike = undefined;
                                        zulu = report.bind(mike)(zulu);
                                        mike = zulu.transitionTo;
                                        report = _closure1_slot9;
                                        tango = report.CHANNEL;
                                        entity = _closure5_slot0;
                                        entity = entity.id;
                                        entity = tango.bind(report)(entity);
                                        entity = mike.bind(zulu)(entity);
 90:
                                        entity = undefined;
                                        return entity;
                                    }
                                };
                                mike = zulu.bind(tango)(mike);
                                return entity;
                            }
                        };
                        oscar = mike;
                        entity = new oscar[zulu](report, tango);
                        entity = entity instanceof Object ? entity : mike;
                        return entity;
                    };
                    oscar = oscar.bind(golf)(zulu);
                    SaveGenerator(address=279);
 277:
                    return oscar;
 279:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=7);
                    if(options) { _fun00002_ip = 288; continue _fun00001 }
 285:
                    return golf;
 288:
                    return oscar;
 291:
                    return report;
 294:
                    return tango;
 297:
                    return zulu;
 300:
                    return mike;
 303:
                    return entity;
                }
            };
            mike = entity.next;
            mike = mike.bind(entity)();
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot13 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot13 = entity;
    entity = function() { // Original name: _fetchLandingAsset
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    StartGenerator();
                    verify = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00008_ip = 265; continue _fun00007 }
 13:
                    zulu = undefined;
                    report = undefined;
                    oscar = undefined;
                    offset = _closure1_slot1;
                    yankee = _closure1_slot2;
                    tango = 11;
                    tango = yankee[tango];
                    options = offset.bind(zulu)(tango);
                    golf = options.getGuildIconSource;
                    tango = {};
                    romeo = verify.id;
                    tango['id'] = romeo;
                    verify = verify.icon;
                    tango['icon'] = verify;
                    verify = false;
                    tango['canAnimate'] = verify;
                    verify = 12;
                    verify = yankee[verify];
                    verify = offset.bind(zulu)(verify);
                    offset = verify.bind(zulu)();
                    verify = 96;
                    verify = verify / offset;
                    tango['size'] = verify;
                    report = golf.bind(options)(tango);
 107: // try_start_0
                    tango = _closure1_slot4;
                    options = tango.ImageManager;
                    golf = options.getAvatarBase64;
                    tango = report;
                    tango = golf.bind(options)(tango);
                    SaveGenerator(address=135);
 133:
                    return tango;
 135:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=6);
                    if(golf) { _fun00008_ip = 249; continue _fun00007 }
 141:
                    oscar = tango;
                    golf = _closure1_slot4;
                    options = golf.ImageManager;
                    golf = options.getDominantColors;
                    report = golf.bind(options)(report);
                    SaveGenerator(address=169);
 167:
                    return report;
 169:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=6);
                    if(golf) { _fun00008_ip = 246; continue _fun00007 }
 175:
                    options = _closure1_slot1;
                    verify = _closure1_slot2;
                    golf = 13;
                    golf = verify[golf];
                    verify = options.bind(zulu)(golf);
                    golf = _closure1_slot10;
                    options = golf.bind(zulu)();
                    offset = oscar;
                    oscar = global;
                    oscar = oscar.HermesInternal;
                    golf = oscar.concat;
                    oscar = 'data:image/png;base64,';
                    golf = golf.bind(oscar)(offset);
                    oscar = 0;
                    oscar = report[oscar];
                    oscar = verify.bind(zulu)(options, golf, oscar);
 243: // try_end0
                    return oscar;
 246:
                    return report;
 249:
                    return tango;
 252: // catch_target0
                    CatchBlockStart(arg_register=3);
                    mike = _closure1_slot10;
                    mike = mike.bind(zulu)();
                    return mike;
 265:
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
    entity = function(argFoo) { // Original name: waitForOnboardingCompleted
        report = argFoo;
        var _closure2_slot0 = report;
        tango = _closure1_slot0;
        zulu = _closure1_slot2;
        entity = 14;
        zulu = zulu[entity];
        entity = undefined;
        tango = tango.bind(entity)(zulu);
        zulu = tango.waitForOnboardingCompletion;
        tango = zulu.bind(tango)(report);
        zulu = tango.then;
        mike = function() {
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                tango = _closure1_slot11;
                mike = _closure2_slot0;
                tango = tango[mike];
                mike = null;
                if(!(mike != tango)) { _fun00010_ip = 30; continue _fun00009 }
 24:
                mike = undefined;
                mike = tango.bind(mike)();
 30:
                mike = _closure1_slot11;
                tango = _closure2_slot0;
                mike = delete mike[tango];
                zulu = _closure1_slot1;
                mike = _closure1_slot2;
                entity = 15;
                mike = mike[entity];
                entity = undefined;
                zulu = zulu.bind(entity)(mike);
                mike = zulu.finishOnboarding;
                mike = mike.bind(zulu)(tango);
                return entity;
            }
        };
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    var _closure1_slot15 = entity;
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
    tango = report.bind(entity)(tango);
    tango = tango.NativeModules;
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.GUILD_ONBOARDING_MODAL_KEY;
    var _closure1_slot7 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.GuildFeatures;
    var _closure1_slot8 = golf;
    tango = tango.Routes;
    var _closure1_slot9 = tango;
    tango = function() { // Original name: getBaseAnimationData
        entity = global;
        zulu = entity.JSON;
        mike = zulu.parse;
        report = entity.JSON;
        tango = report.stringify;
        golf = _closure1_slot0;
        oscar = _closure1_slot2;
        entity = 6;
        oscar = oscar[entity];
        entity = undefined;
        entity = golf.bind(entity)(oscar);
        entity = tango.bind(report)(entity);
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    var _closure1_slot10 = tango;
    tango = {};
    var _closure1_slot11 = tango;
    tango = {};
    var _closure1_slot12 = tango;
    tango = 19;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guild_onboarding/doGuildOnboarding.native.tsx';
    tango = report.bind(oscar)(tango);
    tango = function() { // Original name: doGuildOnboarding
        entity = undefined;
        tango = _closure1_slot13;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['default'] = tango;
    tango = function(argFoo) { // Original name: clearGuildOnboardingPromise
        mike = _closure1_slot11;
        entity = argFoo;
        entity = delete mike[entity];
        entity = undefined;
        return entity;
    };
    zulu['clearGuildOnboardingPromise'] = tango;
    mike = function(argFoo, argBar) { // Original name: openOnboardingFromLanding
        options = argFoo;
        entity = argBar;
        var _closure2_slot0 = entity;
        zulu = _closure1_slot15;
        entity = undefined;
        zulu = zulu.bind(entity)(options);
        report = _closure1_slot1;
        zulu = _closure1_slot2;
        tango = 8;
        tango = zulu[tango];
        oscar = report.bind(entity)(tango);
        report = oscar.pushLazy;
        verify = _closure1_slot0;
        tango = 17;
        tango = zulu[tango];
        verify = verify.bind(entity)(tango);
        tango = 16;
        tango = zulu[tango];
        zulu = zulu.paths;
        tango = verify.bind(entity)(tango, zulu);
        zulu = {};
        zulu['guildId'] = options;
        verify = false;
        zulu['backShouldLeaveGuild'] = verify;
        golf = function() { // Original name: onFinish
            mike = _closure2_slot0;
            entity = undefined;
            mike = mike.bind(entity)();
            return entity;
        };
        zulu['onFinish'] = golf;
        golf = _closure1_slot12;
        golf = golf[options];
        zulu['landingAnimation'] = golf;
        golf = true;
        zulu['isFirstOpen'] = golf;
        mike = _closure1_slot7;
        mike = report.bind(oscar)(tango, zulu, mike);
        return entity;
    };
    zulu['openOnboardingFromLanding'] = mike;
    return entity;
})();