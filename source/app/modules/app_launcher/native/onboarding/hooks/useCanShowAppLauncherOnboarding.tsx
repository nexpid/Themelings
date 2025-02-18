// app/modules/app_launcher/native/onboarding/hooks/useCanShowAppLauncherOnboarding.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    verify = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = verify;
    var _closure1_slot2 = golfie;
    entity = global;
    option = entity.Object;
    report = option.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = report.bind(option)(zuuluu, entity, michal);
    entity = 0;
    michal = golfie[entity];
    entity = undefined;
    michal = verify.bind(entity)(michal);
    var _closure1_slot3 = michal;
    michal = 1;
    michal = golfie[michal];
    michal = verify.bind(entity)(michal);
    var _closure1_slot4 = michal;
    michal = 2;
    michal = golfie[michal];
    michal = verify.bind(entity)(michal);
    var _closure1_slot5 = michal;
    michal = 3;
    michal = golfie[michal];
    michal = verify.bind(entity)(michal);
    var _closure1_slot6 = michal;
    michal = 4;
    michal = golfie[michal];
    michal = verify.bind(entity)(michal);
    var _closure1_slot7 = michal;
    offset = 5;
    michal = golfie[offset];
    michal = verify.bind(entity)(michal);
    var _closure1_slot8 = michal;
    michal = 6;
    michal = golfie[michal];
    michal = oscard.bind(entity)(michal);
    michal = michal.BuiltInSectionId;
    var _closure1_slot9 = michal;
    option = 7;
    michal = golfie[option];
    michal = verify.bind(entity)(michal);
    michal = michal.Millis;
    michal = michal.SECOND;
    michal = offset * michal;
    var _closure1_slot10 = michal;
    report = golfie[option];
    report = verify.bind(entity)(report);
    report = report.Millis;
    report = report.SECOND;
    report = offset * report;
    var _closure1_slot11 = report;
    report = golfie[option];
    report = verify.bind(entity)(report);
    report = report.Millis;
    offset = report.DAY;
    report = 14;
    offset = report * offset;
    var _closure1_slot12 = offset;
    offset = golfie[option];
    offset = verify.bind(entity)(offset);
    offset = offset.Millis;
    offset = offset.HOUR;
    var _closure1_slot13 = offset;
    option = golfie[option];
    option = verify.bind(entity)(option);
    option = option.Millis;
    option = option.DAY;
    var _closure1_slot14 = option;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/app_launcher/native/onboarding/hooks/useCanShowAppLauncherOnboarding.tsx';
    report = oscard.bind(golfie)(report);
    tangon = function(argFoo) { // Original name: useCanShowAppLauncherOnboarding
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            update = entity.channelId;
            var _closure2_slot0 = update;
            entity = global;
            michal = entity.Date;
            entity = michal.now;
            result = entity.bind(michal)();
            michal = _closure1_slot0;
            entity = _closure1_slot2;
            yankee = 8;
            entity = entity[yankee];
            source = undefined;
            report = michal.bind(source)(entity);
            tangon = report.useStateFromStores;
            entity = _closure1_slot4;
            michal = new Array(1);
            michal[0] = entity;
            entity = function() {
                zuuluu = _closure1_slot4;
                michal = zuuluu.getChannel;
                entity = _closure2_slot0;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            sizing = tangon.bind(report)(michal, entity);
            romeon = null;
            michal = romeon == sizing;
            entity = undefined;
            if(michal) { _fun00002_ip = 102; continue _fun00001 }
 97:
            entity = sizing.guild_id;
 102:
            michal = function() { // Original name: useIsNewUser
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    zuuluu = _closure1_slot0;
                    tangon = _closure1_slot2;
                    entity = 8;
                    entity = tangon[entity];
                    golfie = undefined;
                    report = zuuluu.bind(golfie)(entity);
                    tangon = report.useStateFromStores;
                    entity = _closure1_slot6;
                    zuuluu = new Array(1);
                    zuuluu[0] = entity;
                    entity = function() {
                        michal = _closure1_slot6;
                        entity = michal.getCurrentUser;
                        entity = entity.bind(michal)();
                        return entity;
                    };
                    tangon = tangon.bind(report)(zuuluu, entity);
                    zuuluu = null;
                    report = zuuluu == tangon;
                    entity = undefined;
                    if(report) { _fun00004_ip = 74; continue _fun00003 }
 68:
                    entity = tangon.createdAt;
 74:
                    entity = zuuluu != entity;
                    if(!entity) { _fun00004_ip = 146; continue _fun00003 }
 81:
                    zuuluu = global;
                    report = zuuluu.Date;
                    zuuluu = report.now;
                    zuuluu = zuuluu.bind(report)();
                    oscard = _closure1_slot1;
                    option = _closure1_slot2;
                    report = 9;
                    report = option[report];
                    oscard = oscard.bind(golfie)(report);
                    report = oscard.extractTimestamp;
                    tangon = tangon.id;
                    tangon = report.bind(oscard)(tangon);
                    michal = _closure1_slot12;
                    michal = tangon + michal;
                    entity = zuuluu < michal;
 146:
                    return entity;
                }
            };
            oscard = michal.bind(source)();
            michal = {};
            michal['guildId'] = entity;
            entity = function(argFoo) { // Original name: useIsInSmallContext
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    michal = argFoo;
                    michal = michal.guildId;
                    var _closure3_slot0 = michal;
                    report = _closure1_slot0;
                    tangon = _closure1_slot2;
                    zuuluu = 8;
                    tangon = tangon[zuuluu];
                    zuuluu = undefined;
                    tangon = report.bind(zuuluu)(tangon);
                    zuuluu = tangon.useStateFromStores;
                    report = _closure1_slot5;
                    michal = new Array(1);
                    michal[0] = report;
                    entity = function() {
                        zuuluu = _closure1_slot5;
                        michal = zuuluu.getMemberCount;
                        entity = _closure3_slot0;
                        entity = michal.bind(zuuluu)(entity);
                        return entity;
                    };
                    zuuluu = zuuluu.bind(tangon)(michal, entity);
                    entity = null;
                    entity = entity != zuuluu;
                    if(!entity) { _fun00006_ip = 85; continue _fun00005 }
 78:
                    michal = 200;
                    entity = zuuluu < michal;
 85:
                    return entity;
                }
            };
            offset = entity.bind(source)(michal);
            michal = {};
            michal['currentTimeMs'] = result;
            entity = function(argFoo) { // Original name: useIsInCooldown
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    entity = argFoo;
                    zuuluu = entity.currentTimeMs;
                    report = _closure1_slot0;
                    tangon = _closure1_slot2;
                    entity = 8;
                    tangon = tangon[entity];
                    entity = undefined;
                    oscard = report.bind(entity)(tangon);
                    report = oscard.useStateFromStores;
                    entity = _closure1_slot7;
                    tangon = new Array(1);
                    tangon[0] = entity;
                    entity = function() {
                        michal = _closure1_slot7;
                        entity = michal.getLastSeenTimeMs;
                        entity = entity.bind(michal)();
                        return entity;
                    };
                    tangon = report.bind(oscard)(tangon, entity);
                    entity = null;
                    entity = entity != tangon;
                    if(!entity) { _fun00008_ip = 87; continue _fun00007 }
 75:
                    michal = _closure1_slot13;
                    michal = tangon + michal;
                    entity = zuuluu < michal;
 87:
                    return entity;
                }
            };
            verify = entity.bind(source)(michal);
            entity = {};
            entity['isInCooldown'] = verify;
            tangon = entity.isInCooldown;
            golfie = new Array(0);
            michal = _closure1_slot0;
            report = _closure1_slot2;
            entity = 10;
            entity = report[entity];
            entity = michal.bind(source)(entity);
            foxtra = entity.AppLauncherGlobalSearchExperiment;
            option = foxtra.useExperiment;
            report = {};
            entity = 'App Launcher Home';
            report['location'] = entity;
            entity = {};
            michal = true;
            entity['autoTrackExposure'] = michal;
            entity = option.bind(foxtra)(report, entity);
            entity = entity.enabled;
            if(!entity) { _fun00002_ip = 237; continue _fun00001 }
 234:
            entity = !tangon;
 237:
            if(!entity) { _fun00002_ip = 282; continue _fun00001 }
 240:
            tangon = golfie.push;
            report = _closure1_slot0;
            option = _closure1_slot2;
            entity = 11;
            entity = option[entity];
            entity = report.bind(source)(entity);
            entity = entity.DismissibleContent;
            entity = entity.APP_LAUNCHER_GLOBAL_SEARCH_ONBOARDING;
            entity = tangon.bind(golfie)(entity);
 282:
            option = _closure1_slot0;
            report = _closure1_slot2;
            entity = 12;
            entity = report[entity];
            tangon = option.bind(source)(entity);
            entity = tangon.useSelectedDismissibleContent;
            foxtra = entity.bind(tangon)(golfie);
            entity = {};
            golfie = _closure1_slot3;
            tangon = 1;
            golfie = golfie.bind(source)(foxtra, tangon);
            tangon = 0;
            golfie = golfie[tangon];
            ctrled = 11;
            tangon = report[ctrled];
            tangon = option.bind(source)(tangon);
            tangon = tangon.DismissibleContent;
            tangon = tangon.APP_LAUNCHER_GLOBAL_SEARCH_ONBOARDING;
            tangon = golfie === tangon;
            entity['willShowGlobalSearchOnboarding'] = tangon;
            tangon = entity.willShowGlobalSearchOnboarding;
            entity = report[yankee];
            backup = option.bind(source)(entity);
            foxtra = backup.useStateFromStoresObject;
            entity = _closure1_slot8;
            golfie = new Array(1);
            golfie[0] = entity;
            entity = function() {
                entity = {};
                zuuluu = _closure1_slot8;
                michal = zuuluu.getRecentMessageMetadata;
                michal = michal.bind(zuuluu)();
                entity['recentMessageMetadata'] = michal;
                michal = zuuluu.getRecentApplicationCommandMetadata;
                michal = michal.bind(zuuluu)();
                entity['recentApplicationCommandMetadata'] = michal;
                return entity;
            };
            entity = foxtra.bind(backup)(golfie, entity);
            golfie = entity.recentMessageMetadata;
            entity = entity.recentApplicationCommandMetadata;
            report = report[yankee];
            yankee = option.bind(source)(report);
            option = yankee.useStateFromStores;
            foxtra = _closure1_slot7;
            report = new Array(1);
            report[0] = foxtra;
            zuuluu = function() {
                michal = _closure1_slot7;
                entity = michal.getTriggeredOnboardingContentMetadata;
                entity = entity.bind(michal)();
                return entity;
            };
            zuuluu = option.bind(yankee)(report, zuuluu);
            report = {};
            report['currentTimeMs'] = result;
            report['recentMessageMetadata'] = golfie;
            report['channelId'] = update;
            foxtra = report.currentTimeMs;
            option = report.recentMessageMetadata;
            golfie = report.channelId;
            yankee = romeon != option;
            if(!yankee) { _fun00002_ip = 522; continue _fun00001 }
 504:
            backup = option.timeMs;
            report = _closure1_slot10;
            report = backup + report;
            yankee = foxtra < report;
 522:
            if(!yankee) { _fun00002_ip = 543; continue _fun00001 }
 525:
            foxtra = romeon == option;
            report = undefined;
            if(foxtra) { _fun00002_ip = 539; continue _fun00001 }
 534:
            report = option.channelId;
 539:
            yankee = report === golfie;
 543:
            report = {};
            report['currentTimeMs'] = result;
            report['recentApplicationCommandMetadata'] = entity;
            report['channelId'] = update;
            foxtra = report.currentTimeMs;
            option = report.recentApplicationCommandMetadata;
            golfie = report.channelId;
            kiloes = romeon != option;
            if(!kiloes) { _fun00002_ip = 601; continue _fun00001 }
 583:
            backup = option.timeMs;
            report = _closure1_slot11;
            report = backup + report;
            kiloes = foxtra < report;
 601:
            if(!kiloes) { _fun00002_ip = 622; continue _fun00001 }
 604:
            foxtra = romeon == option;
            report = undefined;
            if(foxtra) { _fun00002_ip = 618; continue _fun00001 }
 613:
            report = option.channelId;
 618:
            kiloes = report === golfie;
 622:
            golfie = romeon == entity;
            report = undefined;
            if(golfie) { _fun00002_ip = 636; continue _fun00001 }
 631:
            report = entity.applicationId;
 636:
            entity = _closure1_slot9;
            entity = entity.BUILT_IN;
            backup = report === entity;
            echoed = _closure1_slot0;
            entity = _closure1_slot2;
            report = 13;
            golfie = entity[report];
            foxtra = echoed.bind(source)(golfie);
            option = foxtra.useIsDismissibleContentDismissed;
            golfie = entity[ctrled];
            golfie = echoed.bind(source)(golfie);
            golfie = golfie.DismissibleContent;
            golfie = golfie.APP_LAUNCHER_ONBOARDING_BOTS_BANNER;
            foxtra = option.bind(foxtra)(golfie);
            golfie = entity[report];
            vacuum = echoed.bind(source)(golfie);
            option = vacuum.useIsDismissibleContentDismissed;
            golfie = entity[ctrled];
            golfie = echoed.bind(source)(golfie);
            golfie = golfie.DismissibleContent;
            golfie = golfie.APP_LAUNCHER_ONBOARDING_APPS_BANNER;
            golfie = option.bind(vacuum)(golfie);
            report = entity[report];
            option = echoed.bind(source)(report);
            report = option.useIsDismissibleContentDismissed;
            entity = entity[ctrled];
            entity = echoed.bind(source)(entity);
            entity = entity.DismissibleContent;
            entity = entity.APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER;
            option = report.bind(option)(entity);
            entity = {'canShowOnboarding': false, 'canShowBotsBanner': false, 'canShowAppsOrActivitiesBanner': false, 'willShowGlobalSearchOnboarding': false, 'fromTriggeredOnboarding': false};
            report = romeon != zuuluu;
            if(!report) { _fun00002_ip = 810; continue _fun00001 }
 801:
            echoed = zuuluu.channelId;
            report = echoed === update;
 810:
            if(!report) { _fun00002_ip = 831; continue _fun00001 }
 813:
            echoed = zuuluu.timeMs;
            output = _closure1_slot14;
            output = echoed + output;
            report = output > result;
 831:
            if(!(romeon != sizing)) { _fun00002_ip = 1000; continue _fun00001 }
 838:
            romeon = !kiloes;
            if(!kiloes) { _fun00002_ip = 847; continue _fun00001 }
 844:
            romeon = backup;
 847:
            if(romeon) { _fun00002_ip = 853; continue _fun00001 }
 850:
            romeon = foxtra;
 853:
            if(romeon) { _fun00002_ip = 859; continue _fun00001 }
 856:
            romeon = verify;
 859:
            if(romeon) { _fun00002_ip = 874; continue _fun00001 }
 862:
            entity['canShowOnboarding'] = michal;
            entity['canShowBotsBanner'] = michal;
 874:
            if(oscard) { _fun00002_ip = 880; continue _fun00001 }
 877:
            oscard = !yankee;
 880:
            if(oscard) { _fun00002_ip = 886; continue _fun00001 }
 883:
            oscard = !offset;
 886:
            if(oscard) { _fun00002_ip = 892; continue _fun00001 }
 889:
            oscard = verify;
 892:
            if(oscard) { _fun00002_ip = 904; continue _fun00001 }
 895:
            if(!golfie) { _fun00002_ip = 901; continue _fun00001 }
 898:
            golfie = option;
 901:
            oscard = golfie;
 904:
            if(oscard) { _fun00002_ip = 919; continue _fun00001 }
 907:
            entity['canShowOnboarding'] = michal;
            entity['canShowAppsOrActivitiesBanner'] = michal;
 919:
            if(!tangon) { _fun00002_ip = 934; continue _fun00001 }
 922:
            entity['willShowGlobalSearchOnboarding'] = michal;
            entity['canShowOnboarding'] = michal;
 934:
            tangon = entity.canShowOnboarding;
            tangon = !tangon;
            if(!tangon) { _fun00002_ip = 949; continue _fun00001 }
 946:
            tangon = report;
 949:
            if(!tangon) { _fun00002_ip = 1000; continue _fun00001 }
 952:
            entity['canShowOnboarding'] = michal;
            tangon = zuuluu.canShowBotsBanner;
            entity['canShowBotsBanner'] = tangon;
            tangon = zuuluu.canShowAppsOrActivitiesBanner;
            entity['canShowAppsOrActivitiesBanner'] = tangon;
            zuuluu = zuuluu.willShowGlobalSearchOnboarding;
            entity['willShowGlobalSearchOnboarding'] = zuuluu;
            entity['fromTriggeredOnboarding'] = michal;
 1000:
            return entity;
        }
    };
    zuuluu['default'] = tangon;
    zuuluu['RECENT_MESSAGE_MS'] = michal;
    return entity;
})();