// app/modules/app_launcher/native/onboarding/hooks/useAppLauncherOnboardingContent.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            var _closure2_slot0 = zuuluu;
            report = global;
            michal = report.Symbol;
            tangon = 'undefined';
            michal = typeof michal;
            michal = tangon !== michal;
            if(!michal) { _fun00002_ip = 45; continue _fun00001 }
 30:
            tangon = report.Symbol;
            tangon = tangon.iterator;
            michal = zuuluu[tangon];
 45:
            if(michal) { _fun00002_ip = 54; continue _fun00001 }
 48:
            michal = zuuluu.@@iterator;
 54:
            if(michal) { _fun00002_ip = 344; continue _fun00001 }
 60:
            oscard = report.Array;
            tangon = oscard.isArray;
            oscard = tangon.bind(oscard)(zuuluu);
            tangon = michal;
            if(oscard) { _fun00002_ip = 322; continue _fun00001 }
 85:
            option = undefined;
            oscard = undefined;
            if(!zuuluu) { _fun00002_ip = 282; continue _fun00001 }
 95:
            verify = 'string';
            golfie = typeof zuuluu;
            if(!(verify !== golfie)) { _fun00002_ip = 269; continue _fun00001 }
 109:
            golfie = {};
            verify = golfie.toString;
            golfie = verify.call;
            yankee = golfie.bind(verify)(zuuluu);
            offset = yankee.slice;
            verify = 8;
            golfie = -1;
            verify = offset.bind(yankee)(verify, golfie);
            golfie = 'Object';
            golfie = golfie === verify;
            if(!golfie) { _fun00002_ip = 162; continue _fun00001 }
 157:
            golfie = zuuluu.constructor;
 162:
            offset = verify;
            if(!golfie) { _fun00002_ip = 178; continue _fun00001 }
 168:
            golfie = zuuluu.constructor;
            offset = golfie.name;
 178:
            golfie = 'Map';
            if(!(golfie !== offset)) { _fun00002_ip = 248; continue _fun00001 }
 186:
            golfie = 'Set';
            if(!(golfie !== offset)) { _fun00002_ip = 248; continue _fun00001 }
 194:
            golfie = 'Arguments';
            if(!(golfie !== offset)) { _fun00002_ip = 233; continue _fun00001 }
 204:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golfie = verify.test;
            verify = golfie.bind(verify)(offset);
            golfie = undefined;
            if(!verify) { _fun00002_ip = 246; continue _fun00001 }
 233:
            verify = _closure1_slot8;
            golfie = verify.bind(option)(zuuluu, option);
 246:
            _fun00002_ip = 264; continue _fun00001;
 248:
            offset = report.Array;
            verify = offset.from;
            golfie = verify.bind(offset)(zuuluu);
 264:
            oscard = golfie;
            _fun00002_ip = 282; continue _fun00001;
 269:
            golfie = _closure1_slot8;
            oscard = golfie.bind(option)(zuuluu, option);
 282:
            tangon = oscard;
            if(tangon) { _fun00002_ip = 322; continue _fun00001 }
 288:
            golfie = report.TypeError;
            report = golfie.prototype;
            oscard = Object.create(report, {constructor: {value: golfie}});
            foxtra = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            backup = oscard;
            report = new backup[golfie](foxtra, romeon);
            report = report instanceof Object ? report : oscard;
            throw report;
 322:
            if(!tangon) { _fun00002_ip = 329; continue _fun00001 }
 325:
            _closure2_slot0 = tangon;
 329:
            tangon = 0;
            var _closure2_slot1 = tangon;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    michal = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(michal >= entity))) { _fun00004_ip = 56; continue _fun00003 }
 20:
                    entity = {};
                    michal = false;
                    entity['done'] = michal;
                    zuuluu = _closure2_slot0;
                    michal = _closure2_slot1;
                    michal = parseFloat(michal);
                    tangon = michal + 1;
                    _closure2_slot1 = tangon;
                    michal = zuuluu[michal];
                    entity['value'] = michal;
                    _fun00004_ip = 67; continue _fun00003;
 56:
                    michal = {};
                    zuuluu = true;
                    michal['done'] = zuuluu;
                    entity = michal;
 67:
                    return entity;
                }
            };
            return entity;
 344:
            entity = michal.call;
            zuuluu = entity.bind(michal)(zuuluu);
            michal = zuuluu.next;
            entity = michal.bind;
            entity = entity.bind(michal)(zuuluu);
            return entity;
        }
    };
    var _closure1_slot7 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tangon = argFoo;
            entity = null;
            zuuluu = undefined;
            entity = entity == zuuluu;
            if(entity) { _fun00006_ip = 23; continue _fun00005 }
 14:
            michal = tangon.length;
            entity = zuuluu > michal;
 23:
            michal = undefined;
            if(!entity) { _fun00006_ip = 33; continue _fun00005 }
 28:
            michal = tangon.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zuuluu)(michal);
            zuuluu = 0;
            report = zuuluu < michal;
            if(!report) { _fun00006_ip = 70; continue _fun00005 }
 55:
            report = tangon[zuuluu];
            entity[zuuluu] = report;
            zuuluu = zuuluu + 1;
            if(zuuluu < michal) { _fun00006_ip = 55; continue _fun00005 }
 70:
            return entity;
        }
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
    tangon = report.bind(entity)(tangon);
    tangon = tangon.DismissibleContentGroupName;
    var _closure1_slot6 = tangon;
    tangon = 10;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/app_launcher/native/onboarding/hooks/useAppLauncherOnboardingContent.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: useAppLauncherOnboardingContent
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = argFoo;
            golfie = entity.channelId;
            var _closure2_slot0 = golfie;
            oscard = new Array(0);
            report = _closure1_slot0;
            tangon = _closure1_slot2;
            zuuluu = 6;
            zuuluu = tangon[zuuluu];
            tangon = undefined;
            verify = report.bind(tangon)(zuuluu);
            option = verify.useStateFromStores;
            zuuluu = _closure1_slot5;
            report = new Array(1);
            report[0] = zuuluu;
            zuuluu = function() {
                zuuluu = _closure1_slot5;
                michal = zuuluu.getChannel;
                entity = _closure2_slot0;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            option = option.bind(verify)(report, zuuluu);
            zuuluu = {};
            report = null;
            verify = report == option;
            report = undefined;
            if(verify) { _fun00008_ip = 91; continue _fun00007 }
 86:
            report = option.guild_id;
 91:
            zuuluu['guildId'] = report;
            michal = function(argFoo) { // Original name: useHasUsedActivities
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    entity = argFoo;
                    golfie = entity.guildId;
                    zuuluu = _closure1_slot0;
                    tangon = _closure1_slot2;
                    oscard = 4;
                    michal = tangon[oscard];
                    verify = undefined;
                    offset = zuuluu.bind(verify)(michal);
                    option = offset.useIsDismissibleContentDismissed;
                    michal = 5;
                    report = tangon[michal];
                    report = zuuluu.bind(verify)(report);
                    report = report.DismissibleContent;
                    report = report.APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER;
                    report = option.bind(offset)(report);
                    oscard = tangon[oscard];
                    option = zuuluu.bind(verify)(oscard);
                    oscard = option.useIsDismissibleContentDismissed;
                    michal = tangon[michal];
                    michal = zuuluu.bind(verify)(michal);
                    michal = michal.DismissibleContent;
                    michal = michal.APP_LAUNCHER_ONBOARDING_APPS_BANNER;
                    oscard = oscard.bind(option)(michal);
                    michal = 6;
                    michal = tangon[michal];
                    yankee = zuuluu.bind(verify)(michal);
                    offset = yankee.useStateFromStores;
                    michal = _closure1_slot4;
                    option = new Array(1);
                    option[0] = michal;
                    michal = function() {
                        michal = _closure1_slot4;
                        entity = michal.getApplicationFrecencyWithoutLoadingLatest;
                        entity = entity.bind(michal)();
                        return entity;
                    };
                    option = offset.bind(yankee)(option, michal);
                    michal = _closure1_slot7;
                    entity = 7;
                    entity = tangon[entity];
                    tangon = zuuluu.bind(verify)(entity);
                    zuuluu = tangon.useActivityApplications;
                    entity = {};
                    entity['guildId'] = golfie;
                    if(!report) { _fun00010_ip = 187; continue _fun00009 }
 184:
                    report = oscard;
 187:
                    report = !report;
                    entity['fetchesShelf'] = report;
                    entity = zuuluu.bind(tangon)(entity);
                    golfie = michal.bind(verify)(entity);
                    michal = golfie.bind(verify)();
                    entity = michal.done;
                    report = null;
                    zuuluu = michal;
                    michal = false;
                    if(entity) { _fun00010_ip = 271; continue _fun00009 }
 224:
                    entity = zuuluu.value;
                    offset = option.getEntry;
                    entity = entity.id;
                    entity = offset.bind(option)(entity);
                    entity = report != entity;
                    michal = true;
                    if(entity) { _fun00010_ip = 271; continue _fun00009 }
 254:
                    offset = golfie.bind(verify)();
                    entity = offset.done;
                    zuuluu = offset;
                    michal = false;
                    if(!entity) { _fun00010_ip = 224; continue _fun00009 }
 271:
                    entity = {};
                    entity['hasUsedActivities'] = michal;
                    return entity;
                }
            };
            michal = michal.bind(tangon)(zuuluu);
            report = michal.hasUsedActivities;
            zuuluu = _closure1_slot1;
            option = _closure1_slot2;
            michal = 8;
            michal = option[michal];
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = {};
            michal['channelId'] = golfie;
            michal = zuuluu.bind(tangon)(michal);
            zuuluu = michal.canShowBotsBanner;
            michal = michal.canShowAppsOrActivitiesBanner;
            if(!zuuluu) { _fun00008_ip = 201; continue _fun00007 }
 159:
            golfie = oscard.push;
            option = _closure1_slot0;
            verify = _closure1_slot2;
            zuuluu = 5;
            zuuluu = verify[zuuluu];
            zuuluu = option.bind(tangon)(zuuluu);
            zuuluu = zuuluu.DismissibleContent;
            zuuluu = zuuluu.APP_LAUNCHER_ONBOARDING_BOTS_BANNER;
            zuuluu = golfie.bind(oscard)(zuuluu);
 201:
            if(!michal) { _fun00008_ip = 262; continue _fun00007 }
 204:
            zuuluu = oscard.push;
            golfie = _closure1_slot0;
            option = _closure1_slot2;
            michal = 5;
            michal = option[michal];
            michal = golfie.bind(tangon)(michal);
            michal = michal.DismissibleContent;
            if(report) { _fun00008_ip = 251; continue _fun00007 }
 238:
            report = michal.APP_LAUNCHER_ONBOARDING_APPS_BANNER;
            report = zuuluu.bind(oscard)(report);
            _fun00008_ip = 262; continue _fun00007;
 251:
            michal = michal.APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER;
            michal = zuuluu.bind(oscard)(michal);
 262:
            zuuluu = _closure1_slot0;
            report = _closure1_slot2;
            michal = 9;
            michal = report[michal];
            report = zuuluu.bind(tangon)(michal);
            zuuluu = report.useSelectedDismissibleContent;
            michal = _closure1_slot6;
            michal = michal.APP_LAUNCHER_ONBOARDING;
            zuuluu = zuuluu.bind(report)(oscard, michal);
            michal = _closure1_slot3;
            entity = 2;
            zuuluu = michal.bind(tangon)(zuuluu, entity);
            entity = {};
            michal = 0;
            michal = zuuluu[michal];
            entity['visibleContent'] = michal;
            michal = 1;
            michal = zuuluu[michal];
            entity['markAsDismissed'] = michal;
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();