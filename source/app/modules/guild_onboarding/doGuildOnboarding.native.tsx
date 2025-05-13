// app/modules/guild_onboarding/doGuildOnboarding.native.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    option = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = option;
    var _closure1_slot2 = golfie;
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
                    if(michal) { _fun00002_ip = 307; continue _fun00001 }
 10:
                    michal = argFoo;
                    verify = michal.guildId;
                    golfie = undefined;
                    SaveGenerator(address=24);
 22:
                    return golfie;
 24:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00002_ip = 304; continue _fun00001 }
 33:
                    tangon = _closure1_slot1;
                    report = _closure1_slot2;
                    zuuluu = 7;
                    zuuluu = report[zuuluu];
                    option = tangon.bind(golfie)(zuuluu);
                    zuuluu = option.hideActionSheet;
                    zuuluu = zuuluu.bind(option)();
                    zuuluu = 8;
                    zuuluu = report[zuuluu];
                    tangon = tangon.bind(golfie)(zuuluu);
                    zuuluu = tangon.popAll;
                    zuuluu = zuuluu.bind(tangon)();
                    tangon = _closure1_slot0;
                    zuuluu = 9;
                    zuuluu = report[zuuluu];
                    tangon = tangon.bind(golfie)(zuuluu);
                    zuuluu = tangon.waitForGuild;
                    zuuluu = zuuluu.bind(tangon)(verify);
                    SaveGenerator(address=119);
 117:
                    return zuuluu;
 119:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(tangon) { _fun00002_ip = 301; continue _fun00001 }
 128:
                    report = zuuluu.hasFeature;
                    tangon = _closure1_slot8;
                    tangon = tangon.GUILD_ONBOARDING;
                    tangon = report.bind(zuuluu)(tangon);
                    if(!tangon) { _fun00002_ip = 173; continue _fun00001 }
 152:
                    option = zuuluu.hasFeature;
                    report = _closure1_slot8;
                    report = report.COMMUNITY;
                    tangon = option.bind(zuuluu)(report);
 173:
                    if(!tangon) { _fun00002_ip = 289; continue _fun00001 }
 176:
                    report = _closure1_slot0;
                    option = _closure1_slot2;
                    tangon = 10;
                    tangon = option[tangon];
                    report = report.bind(golfie)(tangon);
                    tangon = report.maybeFetchOnboardingPrompts;
                    tangon = tangon.bind(report)(verify);
                    SaveGenerator(address=211);
 209:
                    return tangon;
 211:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(report) { _fun00002_ip = 298; continue _fun00001 }
 217:
                    option = _closure1_slot6;
                    report = option.shouldShowOnboarding;
                    report = report.bind(option)(verify);
                    if(!report) { _fun00002_ip = 289; continue _fun00001 }
 235:
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
                    if(offset) { _fun00002_ip = 295; continue _fun00001 }
 261:
                    option[verify] = report;
                    option = _closure1_slot15;
                    oscard = zuuluu.id;
                    oscard = option.bind(golfie)(oscard);
                    SaveGenerator(address=283);
 281:
                    return oscard;
 283:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=7);
                    if(option) { _fun00002_ip = 292; continue _fun00001 }
 289:
                    return golfie;
 292:
                    return oscard;
 295:
                    return report;
 298:
                    return tangon;
 301:
                    return zuuluu;
 304:
                    return michal;
 307:
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
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    StartGenerator();
                    verify = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00004_ip = 265; continue _fun00003 }
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
                    if(golfie) { _fun00004_ip = 249; continue _fun00003 }
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
                    if(golfie) { _fun00004_ip = 246; continue _fun00003 }
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
    tangon = function(argFoo) { // Original name: openAndWaitForOnboarding
        tangon = argFoo;
        var _closure2_slot0 = tangon;
        zuuluu = function(argFoo) { // Original name: waitForOnboardingCompleted
            report = argFoo;
            var _closure3_slot0 = report;
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
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    tangon = _closure1_slot11;
                    michal = _closure3_slot0;
                    tangon = tangon[michal];
                    michal = null;
                    if(!(michal != tangon)) { _fun00006_ip = 30; continue _fun00005 }
 24:
                    michal = undefined;
                    michal = tangon.bind(michal)();
 30:
                    michal = _closure1_slot11;
                    tangon = _closure3_slot0;
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
        michal = undefined;
        michal = zuuluu.bind(michal)(tangon);
        michal = global;
        zuuluu = michal.Promise;
        michal = zuuluu.prototype;
        michal = Object.create(michal, {constructor: {value: zuuluu}});
        report = function(argFoo) {
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                tangon = _closure1_slot11;
                entity = _closure2_slot0;
                tangon = tangon[entity];
                entity = null;
                if(!(entity == tangon)) { _fun00008_ip = 41; continue _fun00007 }
 26:
                report = _closure1_slot11;
                tangon = _closure2_slot0;
                entity = argFoo;
                report[tangon] = entity;
 41:
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
                offset = _closure2_slot0;
                tangon['guildId'] = offset;
                option = true;
                tangon['backShouldLeaveGuild'] = option;
                verify = function() { // Original name: onFinish
                    entity = undefined;
                    return entity;
                };
                tangon['onFinish'] = verify;
                verify = _closure1_slot12;
                verify = verify[offset];
                tangon['landingAnimation'] = verify;
                tangon['isFirstOpen'] = option;
                zuuluu = _closure1_slot7;
                tangon = oscard.bind(golfie)(report, tangon, zuuluu);
                zuuluu = tangon.then;
                michal = function() {
                    _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                        michal = _closure1_slot5;
                        entity = michal.getGuildId;
                        zuuluu = entity.bind(michal)();
                        michal = _closure2_slot0;
                        if(!(zuuluu !== michal)) { _fun00010_ip = 80; continue _fun00009 }
 28:
                        report = _closure1_slot0;
                        zuuluu = _closure1_slot2;
                        michal = 18;
                        zuuluu = zuuluu[michal];
                        michal = undefined;
                        zuuluu = report.bind(michal)(zuuluu);
                        michal = zuuluu.transitionTo;
                        report = _closure1_slot9;
                        tangon = report.CHANNEL;
                        entity = _closure2_slot0;
                        entity = tangon.bind(report)(entity);
                        entity = michal.bind(zuuluu)(entity);
 80:
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
    var _closure1_slot15 = tangon;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, report);
    entity = 0;
    report = golfie[entity];
    entity = undefined;
    report = option.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 1;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    report = report.NativeModules;
    var _closure1_slot4 = report;
    report = 2;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot5 = report;
    report = 3;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot6 = report;
    report = 4;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    report = report.GUILD_ONBOARDING_MODAL_KEY;
    var _closure1_slot7 = report;
    report = 5;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    option = report.GuildFeatures;
    var _closure1_slot8 = option;
    report = report.Routes;
    var _closure1_slot9 = report;
    report = function() { // Original name: getBaseAnimationData
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
    var _closure1_slot10 = report;
    report = {};
    var _closure1_slot11 = report;
    report = {};
    var _closure1_slot12 = report;
    report = 19;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/guild_onboarding/doGuildOnboarding.native.tsx';
    report = oscard.bind(golfie)(report);
    report = function() { // Original name: doGuildOnboarding
        entity = undefined;
        tangon = _closure1_slot13;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['default'] = report;
    zuuluu['openAndWaitForOnboarding'] = tangon;
    tangon = function(argFoo) { // Original name: discardOnboardingPromise
        michal = _closure1_slot11;
        entity = argFoo;
        entity = delete michal[entity];
        entity = undefined;
        return entity;
    };
    zuuluu['discardOnboardingPromise'] = tangon;
    michal = function(argFoo) { // Original name: isOnboardingActiveForGuild
        michal = _closure1_slot11;
        entity = argFoo;
        michal = michal[entity];
        entity = null;
        entity = entity != michal;
        return entity;
    };
    zuuluu['isOnboardingActiveForGuild'] = michal;
    return entity;
})();