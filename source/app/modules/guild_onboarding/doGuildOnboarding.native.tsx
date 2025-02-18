// app/modules/guild_onboarding/doGuildOnboarding.native.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function() { // Original name: _doGuildOnboarding
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00002_ip = 303; continue _fun00001 }
 12:
                    michal = argFoo;
                    verify = michal.guildId;
                    golfie = undefined;
                    SaveGenerator(address=26);
 24:
                    return golfie;
 26:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00002_ip = 300; continue _fun00001 }
 35:
                    tangon = _closure1_slot1;
                    option = _closure1_slot2;
                    zuuluu = 7;
                    zuuluu = option[zuuluu];
                    offset = tangon.bind(golfie)(zuuluu);
                    zuuluu = offset.hideActionSheet;
                    zuuluu = zuuluu.bind(offset)();
                    zuuluu = 8;
                    zuuluu = option[zuuluu];
                    tangon = tangon.bind(golfie)(zuuluu);
                    zuuluu = tangon.popAll;
                    zuuluu = zuuluu.bind(tangon)();
                    tangon = _closure1_slot0;
                    zuuluu = 9;
                    zuuluu = option[zuuluu];
                    tangon = tangon.bind(golfie)(zuuluu);
                    zuuluu = tangon.waitForGuild;
                    zuuluu = zuuluu.bind(tangon)(verify);
                    SaveGenerator(address=121);
 119:
                    return zuuluu;
 121:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(tangon) { _fun00002_ip = 297; continue _fun00001 }
 130:
                    option = zuuluu.hasFeature;
                    tangon = _closure1_slot8;
                    tangon = tangon.GUILD_ONBOARDING;
                    tangon = option.bind(zuuluu)(tangon);
                    if(!tangon) { _fun00002_ip = 175; continue _fun00001 }
 154:
                    offset = zuuluu.hasFeature;
                    option = _closure1_slot8;
                    option = option.COMMUNITY;
                    tangon = offset.bind(zuuluu)(option);
 175:
                    if(!tangon) { _fun00002_ip = 285; continue _fun00001 }
 178:
                    option = _closure1_slot0;
                    offset = _closure1_slot2;
                    tangon = 10;
                    tangon = offset[tangon];
                    option = option.bind(golfie)(tangon);
                    tangon = option.maybeFetchOnboardingPrompts;
                    tangon = tangon.bind(option)(verify);
                    SaveGenerator(address=213);
 211:
                    return tangon;
 213:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=7);
                    if(option) { _fun00002_ip = 294; continue _fun00001 }
 219:
                    offset = _closure1_slot6;
                    option = offset.shouldShowOnboarding;
                    option = option.bind(offset)(verify);
                    if(!option) { _fun00002_ip = 285; continue _fun00001 }
 237:
                    option = _closure1_slot12;
                    report = function() { // Original name: fetchLandingAsset
                        entity = undefined;
                        tangon = _closure1_slot14;
                        zuuluu = tangon.apply;
                        entity = arguments;
                        michal = entity;
                        entity = this;
                        entity = zuuluu.bind(tangon)(entity, michal);
                        return entity;
                    };
                    report = report.bind(golfie)(zuuluu);
                    SaveGenerator(address=255);
 253:
                    return report;
 255:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=9);
                    if(offset) { _fun00002_ip = 291; continue _fun00001 }
 261:
                    option[verify] = report;
                    oscard = function(argFoo) { // Original name: openAndWaitForOnboarding
                        michal = argFoo;
                        var _closure5_slot0 = michal;
                        tangon = _closure1_slot15;
                        zuuluu = michal.id;
                        michal = undefined;
                        michal = tangon.bind(michal)(zuuluu);
                        michal = global;
                        zuuluu = michal.Promise;
                        michal = zuuluu.prototype;
                        michal = Object.create(michal, {constructor: {value: zuuluu}});
                        report = function(argFoo) {
                            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                                tangon = _closure1_slot11;
                                entity = _closure5_slot0;
                                entity = entity.id;
                                tangon = tangon[entity];
                                entity = null;
                                if(!(entity == tangon)) { _fun00004_ip = 51; continue _fun00003 }
 31:
                                report = _closure1_slot11;
                                entity = _closure5_slot0;
                                tangon = entity.id;
                                entity = argFoo;
                                report[tangon] = entity;
 51:
                                oscard = _closure1_slot1;
                                tangon = _closure1_slot2;
                                entity = 8;
                                report = tangon[entity];
                                entity = undefined;
                                golfie = oscard.bind(entity)(report);
                                oscard = golfie.pushLazy;
                                verify = _closure1_slot0;
                                report = 17;
                                report = tangon[report];
                                verify = verify.bind(entity)(report);
                                report = 16;
                                report = tangon[report];
                                tangon = tangon.paths;
                                report = verify.bind(entity)(report, tangon);
                                tangon = {};
                                verify = _closure5_slot0;
                                option = verify.id;
                                tangon['guildId'] = option;
                                option = true;
                                tangon['backShouldLeaveGuild'] = option;
                                offset = function() { // Original name: onFinish
                                    entity = undefined;
                                    return entity;
                                };
                                tangon['onFinish'] = offset;
                                offset = _closure1_slot12;
                                verify = verify.id;
                                verify = offset[verify];
                                tangon['landingAnimation'] = verify;
                                tangon['isFirstOpen'] = option;
                                zuuluu = _closure1_slot7;
                                tangon = oscard.bind(golfie)(report, tangon, zuuluu);
                                zuuluu = tangon.then;
                                michal = function() {
                                    _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                                        michal = _closure1_slot5;
                                        entity = michal.getGuildId;
                                        zuuluu = entity.bind(michal)();
                                        michal = _closure5_slot0;
                                        michal = michal.id;
                                        if(!(zuuluu !== michal)) { _fun00006_ip = 90; continue _fun00005 }
 33:
                                        report = _closure1_slot0;
                                        zuuluu = _closure1_slot2;
                                        michal = 18;
                                        zuuluu = zuuluu[michal];
                                        michal = undefined;
                                        zuuluu = report.bind(michal)(zuuluu);
                                        michal = zuuluu.transitionTo;
                                        report = _closure1_slot9;
                                        tangon = report.CHANNEL;
                                        entity = _closure5_slot0;
                                        entity = entity.id;
                                        entity = tangon.bind(report)(entity);
                                        entity = michal.bind(zuuluu)(entity);
 90:
                                        entity = undefined;
                                        return entity;
                                    }
                                };
                                michal = zuuluu.bind(tangon)(michal);
                                return entity;
                            }
                        };
                        oscard = michal;
                        entity = new oscard[zuuluu](report, tangon);
                        entity = entity instanceof Object ? entity : michal;
                        return entity;
                    };
                    oscard = oscard.bind(golfie)(zuuluu);
                    SaveGenerator(address=279);
 277:
                    return oscard;
 279:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=7);
                    if(option) { _fun00002_ip = 288; continue _fun00001 }
 285:
                    return golfie;
 288:
                    return oscard;
 291:
                    return report;
 294:
                    return tangon;
 297:
                    return zuuluu;
 300:
                    return michal;
 303:
                    return entity;
                }
            };
            michal = entity.next;
            michal = michal.bind(entity)();
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot13 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot13 = entity;
    entity = function() { // Original name: _fetchLandingAsset
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    StartGenerator();
                    verify = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00008_ip = 265; continue _fun00007 }
 13:
                    zuuluu = undefined;
                    report = undefined;
                    oscard = undefined;
                    offset = _closure1_slot1;
                    yankee = _closure1_slot2;
                    tangon = 11;
                    tangon = yankee[tangon];
                    option = offset.bind(zuuluu)(tangon);
                    golfie = option.getGuildIconSource;
                    tangon = {};
                    romeon = verify.id;
                    tangon['id'] = romeon;
                    verify = verify.icon;
                    tangon['icon'] = verify;
                    verify = false;
                    tangon['canAnimate'] = verify;
                    verify = 12;
                    verify = yankee[verify];
                    verify = offset.bind(zuuluu)(verify);
                    offset = verify.bind(zuuluu)();
                    verify = 96;
                    verify = verify / offset;
                    tangon['size'] = verify;
                    report = golfie.bind(option)(tangon);
 107: // try_start_0
                    tangon = _closure1_slot4;
                    option = tangon.ImageManager;
                    golfie = option.getAvatarBase64;
                    tangon = report;
                    tangon = golfie.bind(option)(tangon);
                    SaveGenerator(address=135);
 133:
                    return tangon;
 135:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=6);
                    if(golfie) { _fun00008_ip = 249; continue _fun00007 }
 141:
                    oscard = tangon;
                    golfie = _closure1_slot4;
                    option = golfie.ImageManager;
                    golfie = option.getDominantColors;
                    report = golfie.bind(option)(report);
                    SaveGenerator(address=169);
 167:
                    return report;
 169:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=6);
                    if(golfie) { _fun00008_ip = 246; continue _fun00007 }
 175:
                    option = _closure1_slot1;
                    verify = _closure1_slot2;
                    golfie = 13;
                    golfie = verify[golfie];
                    verify = option.bind(zuuluu)(golfie);
                    golfie = _closure1_slot10;
                    option = golfie.bind(zuuluu)();
                    offset = oscard;
                    oscard = global;
                    oscard = oscard.HermesInternal;
                    golfie = oscard.concat;
                    oscard = 'data:image/png;base64,';
                    golfie = golfie.bind(oscard)(offset);
                    oscard = 0;
                    oscard = report[oscard];
                    oscard = verify.bind(zuuluu)(option, golfie, oscard);
 243: // try_end0
                    return oscard;
 246:
                    return report;
 249:
                    return tangon;
 252: // catch_target0
                    CatchBlockStart(arg_register=3);
                    michal = _closure1_slot10;
                    michal = michal.bind(zuuluu)();
                    return michal;
 265:
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
    entity = function(argFoo) { // Original name: waitForOnboardingCompleted
        report = argFoo;
        var _closure2_slot0 = report;
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot2;
        entity = 14;
        zuuluu = zuuluu[entity];
        entity = undefined;
        tangon = tangon.bind(entity)(zuuluu);
        zuuluu = tangon.waitForOnboardingCompletion;
        tangon = zuuluu.bind(tangon)(report);
        zuuluu = tangon.then;
        michal = function() {
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                tangon = _closure1_slot11;
                michal = _closure2_slot0;
                tangon = tangon[michal];
                michal = null;
                if(!(michal != tangon)) { _fun00010_ip = 30; continue _fun00009 }
 24:
                michal = undefined;
                michal = tangon.bind(michal)();
 30:
                michal = _closure1_slot11;
                tangon = _closure2_slot0;
                michal = delete michal[tangon];
                zuuluu = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 15;
                michal = michal[entity];
                entity = undefined;
                zuuluu = zuuluu.bind(entity)(michal);
                michal = zuuluu.finishOnboarding;
                michal = michal.bind(zuuluu)(tangon);
                return entity;
            }
        };
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    var _closure1_slot15 = entity;
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
    tangon = report.bind(entity)(tangon);
    tangon = tangon.NativeModules;
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
    tangon = tangon.GUILD_ONBOARDING_MODAL_KEY;
    var _closure1_slot7 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.GuildFeatures;
    var _closure1_slot8 = golfie;
    tangon = tangon.Routes;
    var _closure1_slot9 = tangon;
    tangon = function() { // Original name: getBaseAnimationData
        entity = global;
        zuuluu = entity.JSON;
        michal = zuuluu.parse;
        report = entity.JSON;
        tangon = report.stringify;
        golfie = _closure1_slot0;
        oscard = _closure1_slot2;
        entity = 6;
        oscard = oscard[entity];
        entity = undefined;
        entity = golfie.bind(entity)(oscard);
        entity = tangon.bind(report)(entity);
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    var _closure1_slot10 = tangon;
    tangon = {};
    var _closure1_slot11 = tangon;
    tangon = {};
    var _closure1_slot12 = tangon;
    tangon = 19;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/guild_onboarding/doGuildOnboarding.native.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function() { // Original name: doGuildOnboarding
        entity = undefined;
        tangon = _closure1_slot13;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['default'] = tangon;
    tangon = function(argFoo) { // Original name: clearGuildOnboardingPromise
        michal = _closure1_slot11;
        entity = argFoo;
        entity = delete michal[entity];
        entity = undefined;
        return entity;
    };
    zuuluu['clearGuildOnboardingPromise'] = tangon;
    michal = function(argFoo, argBar) { // Original name: openOnboardingFromLanding
        option = argFoo;
        entity = argBar;
        var _closure2_slot0 = entity;
        zuuluu = _closure1_slot15;
        entity = undefined;
        zuuluu = zuuluu.bind(entity)(option);
        report = _closure1_slot1;
        zuuluu = _closure1_slot2;
        tangon = 8;
        tangon = zuuluu[tangon];
        oscard = report.bind(entity)(tangon);
        report = oscard.pushLazy;
        verify = _closure1_slot0;
        tangon = 17;
        tangon = zuuluu[tangon];
        verify = verify.bind(entity)(tangon);
        tangon = 16;
        tangon = zuuluu[tangon];
        zuuluu = zuuluu.paths;
        tangon = verify.bind(entity)(tangon, zuuluu);
        zuuluu = {};
        zuuluu['guildId'] = option;
        verify = false;
        zuuluu['backShouldLeaveGuild'] = verify;
        golfie = function() { // Original name: onFinish
            michal = _closure2_slot0;
            entity = undefined;
            michal = michal.bind(entity)();
            return entity;
        };
        zuuluu['onFinish'] = golfie;
        golfie = _closure1_slot12;
        golfie = golfie[option];
        zuuluu['landingAnimation'] = golfie;
        golfie = true;
        zuuluu['isFirstOpen'] = golfie;
        michal = _closure1_slot7;
        michal = report.bind(oscard)(tangon, zuuluu, michal);
        return entity;
    };
    zuuluu['openOnboardingFromLanding'] = michal;
    return entity;
})();