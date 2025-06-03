// app/modules/app_launcher/native/onboarding/hooks/useCanShowAppLauncherOnboarding.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    option = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = option;
    var _closure1_slot2 = golfie;
    entity = global;
    verify = entity.Object;
    report = verify.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = report.bind(verify)(zuuluu, entity, michal);
    entity = 0;
    michal = golfie[entity];
    entity = undefined;
    michal = option.bind(entity)(michal);
    var _closure1_slot3 = michal;
    michal = 1;
    michal = golfie[michal];
    michal = option.bind(entity)(michal);
    var _closure1_slot4 = michal;
    michal = 2;
    michal = golfie[michal];
    michal = option.bind(entity)(michal);
    var _closure1_slot5 = michal;
    michal = 3;
    michal = golfie[michal];
    michal = option.bind(entity)(michal);
    var _closure1_slot6 = michal;
    michal = 4;
    michal = golfie[michal];
    michal = option.bind(entity)(michal);
    var _closure1_slot7 = michal;
    offset = 5;
    michal = golfie[offset];
    michal = option.bind(entity)(michal);
    var _closure1_slot8 = michal;
    michal = 6;
    michal = golfie[michal];
    michal = oscard.bind(entity)(michal);
    michal = michal.BuiltInSectionId;
    var _closure1_slot9 = michal;
    report = 7;
    michal = golfie[report];
    michal = option.bind(entity)(michal);
    michal = michal.Millis;
    michal = michal.SECOND;
    michal = offset * michal;
    var _closure1_slot10 = michal;
    verify = golfie[report];
    verify = option.bind(entity)(verify);
    verify = verify.Millis;
    verify = verify.SECOND;
    verify = offset * verify;
    var _closure1_slot11 = verify;
    verify = golfie[report];
    verify = option.bind(entity)(verify);
    verify = verify.Millis;
    offset = verify.DAY;
    verify = 14;
    verify = verify * offset;
    var _closure1_slot12 = verify;
    verify = golfie[report];
    verify = option.bind(entity)(verify);
    verify = verify.Millis;
    verify = verify.HOUR;
    var _closure1_slot13 = verify;
    report = golfie[report];
    report = option.bind(entity)(report);
    report = report.Millis;
    report = report.DAY;
    var _closure1_slot14 = report;
    report = 13;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/app_launcher/native/onboarding/hooks/useCanShowAppLauncherOnboarding.tsx';
    report = oscard.bind(golfie)(report);
    tangon = function(argFoo) { // Original name: useCanShowAppLauncherOnboarding
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            echoed = entity.channelId;
            var _closure2_slot0 = echoed;
            entity = global;
            michal = entity.Date;
            entity = michal.now;
            output = entity.bind(michal)();
            michal = _closure1_slot0;
            entity = _closure1_slot2;
            offset = 8;
            entity = entity[offset];
            update = undefined;
            report = michal.bind(update)(entity);
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
            kiloes = tangon.bind(report)(michal, entity);
            yankee = null;
            michal = yankee == kiloes;
            entity = undefined;
            if(michal) { _fun00002_ip = 102; continue _fun00001 }
 97:
            entity = kiloes.guild_id;
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
            report = michal.bind(update)();
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
            verify = entity.bind(update)(michal);
            michal = {};
            michal['currentTimeMs'] = output;
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
            option = entity.bind(update)(michal);
            entity = {};
            entity['isInCooldown'] = option;
            entity = entity.isInCooldown;
            oscard = new Array(0);
            if(entity) { _fun00002_ip = 212; continue _fun00001 }
 170:
            michal = oscard.push;
            tangon = _closure1_slot0;
            golfie = _closure1_slot2;
            entity = 10;
            entity = golfie[entity];
            entity = tangon.bind(update)(entity);
            entity = entity.DismissibleContent;
            entity = entity.APP_LAUNCHER_GLOBAL_SEARCH_ONBOARDING;
            entity = michal.bind(oscard)(entity);
 212:
            golfie = _closure1_slot0;
            tangon = _closure1_slot2;
            entity = 11;
            entity = tangon[entity];
            michal = golfie.bind(update)(entity);
            entity = michal.useSelectedDismissibleContent;
            romeon = entity.bind(michal)(oscard);
            entity = {};
            oscard = _closure1_slot3;
            michal = 1;
            oscard = oscard.bind(update)(romeon, michal);
            michal = 0;
            oscard = oscard[michal];
            source = 10;
            michal = tangon[source];
            michal = golfie.bind(update)(michal);
            michal = michal.DismissibleContent;
            michal = michal.APP_LAUNCHER_GLOBAL_SEARCH_ONBOARDING;
            michal = oscard === michal;
            entity['willShowGlobalSearchOnboarding'] = michal;
            michal = entity.willShowGlobalSearchOnboarding;
            entity = tangon[offset];
            foxtra = golfie.bind(update)(entity);
            romeon = foxtra.useStateFromStoresObject;
            entity = _closure1_slot8;
            oscard = new Array(1);
            oscard[0] = entity;
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
            entity = romeon.bind(foxtra)(oscard, entity);
            oscard = entity.recentMessageMetadata;
            entity = entity.recentApplicationCommandMetadata;
            tangon = tangon[offset];
            offset = golfie.bind(update)(tangon);
            golfie = offset.useStateFromStores;
            romeon = _closure1_slot7;
            tangon = new Array(1);
            tangon[0] = romeon;
            zuuluu = function() {
                michal = _closure1_slot7;
                entity = michal.getTriggeredOnboardingContentMetadata;
                entity = entity.bind(michal)();
                return entity;
            };
            zuuluu = golfie.bind(offset)(tangon, zuuluu);
            tangon = {};
            tangon['currentTimeMs'] = output;
            tangon['recentMessageMetadata'] = oscard;
            tangon['channelId'] = echoed;
            romeon = tangon.currentTimeMs;
            golfie = tangon.recentMessageMetadata;
            oscard = tangon.channelId;
            offset = yankee != golfie;
            if(!offset) { _fun00002_ip = 452; continue _fun00001 }
 434:
            foxtra = golfie.timeMs;
            tangon = _closure1_slot10;
            tangon = foxtra + tangon;
            offset = romeon < tangon;
 452:
            if(!offset) { _fun00002_ip = 473; continue _fun00001 }
 455:
            romeon = yankee == golfie;
            tangon = undefined;
            if(romeon) { _fun00002_ip = 469; continue _fun00001 }
 464:
            tangon = golfie.channelId;
 469:
            offset = tangon === oscard;
 473:
            tangon = {};
            tangon['currentTimeMs'] = output;
            tangon['recentApplicationCommandMetadata'] = entity;
            tangon['channelId'] = echoed;
            romeon = tangon.currentTimeMs;
            golfie = tangon.recentApplicationCommandMetadata;
            oscard = tangon.channelId;
            backup = yankee != golfie;
            if(!backup) { _fun00002_ip = 531; continue _fun00001 }
 513:
            foxtra = golfie.timeMs;
            tangon = _closure1_slot11;
            tangon = foxtra + tangon;
            backup = romeon < tangon;
 531:
            if(!backup) { _fun00002_ip = 552; continue _fun00001 }
 534:
            romeon = yankee == golfie;
            tangon = undefined;
            if(romeon) { _fun00002_ip = 548; continue _fun00001 }
 543:
            tangon = golfie.channelId;
 548:
            backup = tangon === oscard;
 552:
            oscard = yankee == entity;
            tangon = undefined;
            if(oscard) { _fun00002_ip = 566; continue _fun00001 }
 561:
            tangon = entity.applicationId;
 566:
            entity = _closure1_slot9;
            entity = entity.BUILT_IN;
            foxtra = tangon === entity;
            result = _closure1_slot0;
            entity = _closure1_slot2;
            tangon = 12;
            oscard = entity[tangon];
            romeon = result.bind(update)(oscard);
            golfie = romeon.useIsDismissibleContentDismissed;
            oscard = entity[source];
            oscard = result.bind(update)(oscard);
            oscard = oscard.DismissibleContent;
            oscard = oscard.APP_LAUNCHER_ONBOARDING_BOTS_BANNER;
            romeon = golfie.bind(romeon)(oscard);
            oscard = entity[tangon];
            ctrled = result.bind(update)(oscard);
            golfie = ctrled.useIsDismissibleContentDismissed;
            oscard = entity[source];
            oscard = result.bind(update)(oscard);
            oscard = oscard.DismissibleContent;
            oscard = oscard.APP_LAUNCHER_ONBOARDING_APPS_BANNER;
            oscard = golfie.bind(ctrled)(oscard);
            tangon = entity[tangon];
            golfie = result.bind(update)(tangon);
            tangon = golfie.useIsDismissibleContentDismissed;
            entity = entity[source];
            entity = result.bind(update)(entity);
            entity = entity.DismissibleContent;
            entity = entity.APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER;
            golfie = tangon.bind(golfie)(entity);
            entity = {'canShowOnboarding': false, 'canShowBotsBanner': false, 'canShowAppsOrActivitiesBanner': false, 'willShowGlobalSearchOnboarding': false, 'fromTriggeredOnboarding': false};
            tangon = yankee != zuuluu;
            if(!tangon) { _fun00002_ip = 744; continue _fun00001 }
 735:
            result = zuuluu.channelId;
            tangon = result === echoed;
 744:
            if(!tangon) { _fun00002_ip = 765; continue _fun00001 }
 747:
            result = zuuluu.timeMs;
            sizing = _closure1_slot14;
            sizing = result + sizing;
            tangon = sizing > output;
 765:
            if(!(yankee != kiloes)) { _fun00002_ip = 942; continue _fun00001 }
 772:
            yankee = !backup;
            if(!backup) { _fun00002_ip = 781; continue _fun00001 }
 778:
            yankee = foxtra;
 781:
            if(yankee) { _fun00002_ip = 787; continue _fun00001 }
 784:
            yankee = romeon;
 787:
            if(yankee) { _fun00002_ip = 793; continue _fun00001 }
 790:
            yankee = option;
 793:
            if(yankee) { _fun00002_ip = 810; continue _fun00001 }
 796:
            yankee = true;
            entity['canShowOnboarding'] = yankee;
            entity['canShowBotsBanner'] = yankee;
 810:
            if(report) { _fun00002_ip = 816; continue _fun00001 }
 813:
            report = !offset;
 816:
            if(report) { _fun00002_ip = 822; continue _fun00001 }
 819:
            report = !verify;
 822:
            if(report) { _fun00002_ip = 828; continue _fun00001 }
 825:
            report = option;
 828:
            if(report) { _fun00002_ip = 840; continue _fun00001 }
 831:
            if(!oscard) { _fun00002_ip = 837; continue _fun00001 }
 834:
            oscard = golfie;
 837:
            report = oscard;
 840:
            if(report) { _fun00002_ip = 857; continue _fun00001 }
 843:
            report = true;
            entity['canShowOnboarding'] = report;
            entity['canShowAppsOrActivitiesBanner'] = report;
 857:
            if(!michal) { _fun00002_ip = 874; continue _fun00001 }
 860:
            michal = true;
            entity['willShowGlobalSearchOnboarding'] = michal;
            entity['canShowOnboarding'] = michal;
 874:
            michal = entity.canShowOnboarding;
            michal = !michal;
            if(!michal) { _fun00002_ip = 889; continue _fun00001 }
 886:
            michal = tangon;
 889:
            if(!michal) { _fun00002_ip = 942; continue _fun00001 }
 892:
            michal = true;
            entity['canShowOnboarding'] = michal;
            tangon = zuuluu.canShowBotsBanner;
            entity['canShowBotsBanner'] = tangon;
            tangon = zuuluu.canShowAppsOrActivitiesBanner;
            entity['canShowAppsOrActivitiesBanner'] = tangon;
            zuuluu = zuuluu.willShowGlobalSearchOnboarding;
            entity['willShowGlobalSearchOnboarding'] = zuuluu;
            entity['fromTriggeredOnboarding'] = michal;
 942:
            return entity;
        }
    };
    zuuluu['default'] = tangon;
    zuuluu['RECENT_MESSAGE_MS'] = michal;
    return entity;
})();