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
            if(!michal) { _fun00002_ip = 46; continue _fun00001 }
 30:
            tangon = report.Symbol;
            tangon = tangon.iterator;
            michal = zuuluu[tangon];
 46:
            if(michal) { _fun00002_ip = 55; continue _fun00001 }
 49:
            michal = zuuluu.@@iterator;
 55:
            if(michal) { _fun00002_ip = 345; continue _fun00001 }
 61:
            oscard = report.Array;
            tangon = oscard.isArray;
            oscard = tangon.bind(oscard)(zuuluu);
            tangon = michal;
            if(oscard) { _fun00002_ip = 323; continue _fun00001 }
 86:
            option = undefined;
            oscard = undefined;
            if(!zuuluu) { _fun00002_ip = 283; continue _fun00001 }
 96:
            verify = 'string';
            golfie = typeof zuuluu;
            if(!(verify !== golfie)) { _fun00002_ip = 270; continue _fun00001 }
 110:
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
            if(!golfie) { _fun00002_ip = 163; continue _fun00001 }
 158:
            golfie = zuuluu.constructor;
 163:
            offset = verify;
            if(!golfie) { _fun00002_ip = 179; continue _fun00001 }
 169:
            golfie = zuuluu.constructor;
            offset = golfie.name;
 179:
            golfie = 'Map';
            if(!(golfie !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 187:
            golfie = 'Set';
            if(!(golfie !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 195:
            golfie = 'Arguments';
            if(!(golfie !== offset)) { _fun00002_ip = 234; continue _fun00001 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golfie = verify.test;
            verify = golfie.bind(verify)(offset);
            golfie = undefined;
            if(!verify) { _fun00002_ip = 247; continue _fun00001 }
 234:
            verify = _closure1_slot8;
            golfie = verify.bind(option)(zuuluu, option);
 247:
            _fun00002_ip = 265; continue _fun00001;
 249:
            offset = report.Array;
            verify = offset.from;
            golfie = verify.bind(offset)(zuuluu);
 265:
            oscard = golfie;
            _fun00002_ip = 283; continue _fun00001;
 270:
            golfie = _closure1_slot8;
            oscard = golfie.bind(option)(zuuluu, option);
 283:
            tangon = oscard;
            if(tangon) { _fun00002_ip = 323; continue _fun00001 }
 289:
            golfie = report.TypeError;
            report = golfie.prototype;
            oscard = Object.create(report, {constructor: {value: golfie}});
            foxtra = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            backup = oscard;
            report = new backup[golfie](foxtra, romeon);
            report = report instanceof Object ? report : oscard;
            throw report;
 323:
            if(!tangon) { _fun00002_ip = 330; continue _fun00001 }
 326:
            _closure2_slot0 = tangon;
 330:
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
 345:
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
            zuuluu = {};
            verify = _closure1_slot0;
            option = _closure1_slot2;
            tangon = 6;
            report = option[tangon];
            tangon = undefined;
            yankee = verify.bind(tangon)(report);
            offset = yankee.useStateFromStores;
            report = _closure1_slot5;
            verify = new Array(1);
            verify[0] = report;
            report = function() {
                zuuluu = _closure1_slot5;
                michal = zuuluu.getChannel;
                entity = _closure2_slot0;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            report = offset.bind(yankee)(verify, report);
            zuuluu['channel'] = report;
            michal = function(argFoo) { // Original name: useHasUsedActivities
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    entity = argFoo;
                    oscard = entity.channel;
                    zuuluu = _closure1_slot0;
                    tangon = _closure1_slot2;
                    golfie = 4;
                    michal = tangon[golfie];
                    verify = undefined;
                    offset = zuuluu.bind(verify)(michal);
                    option = offset.useIsDismissibleContentDismissed;
                    michal = 5;
                    report = tangon[michal];
                    report = zuuluu.bind(verify)(report);
                    report = report.DismissibleContent;
                    report = report.APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER;
                    report = option.bind(offset)(report);
                    golfie = tangon[golfie];
                    option = zuuluu.bind(verify)(golfie);
                    golfie = option.useIsDismissibleContentDismissed;
                    michal = tangon[michal];
                    michal = zuuluu.bind(verify)(michal);
                    michal = michal.DismissibleContent;
                    michal = michal.APP_LAUNCHER_ONBOARDING_APPS_BANNER;
                    offset = golfie.bind(option)(michal);
                    michal = 6;
                    michal = tangon[michal];
                    golfie = zuuluu.bind(verify)(michal);
                    tangon = golfie.useStateFromStores;
                    michal = _closure1_slot4;
                    zuuluu = new Array(1);
                    zuuluu[0] = michal;
                    michal = function() {
                        michal = _closure1_slot4;
                        entity = michal.getApplicationFrecencyWithoutLoadingLatest;
                        entity = entity.bind(michal)();
                        return entity;
                    };
                    option = tangon.bind(golfie)(zuuluu, michal);
                    golfie = null;
                    michal = golfie == oscard;
                    yankee = undefined;
                    if(michal) { _fun00010_ip = 169; continue _fun00009 }
 164:
                    yankee = oscard.guild_id;
 169:
                    michal = _closure1_slot7;
                    zuuluu = _closure1_slot0;
                    tangon = _closure1_slot2;
                    entity = 7;
                    entity = tangon[entity];
                    tangon = zuuluu.bind(verify)(entity);
                    zuuluu = tangon.useActivityApplications;
                    entity = {};
                    entity['guildId'] = yankee;
                    if(!report) { _fun00010_ip = 211; continue _fun00009 }
 208:
                    report = offset;
 211:
                    report = !report;
                    entity['fetchesShelf'] = report;
                    report = {};
                    report['channel'] = oscard;
                    oscard = 'channel';
                    report['type'] = oscard;
                    entity['context'] = report;
                    entity = zuuluu.bind(tangon)(entity);
                    oscard = michal.bind(verify)(entity);
                    michal = oscard.bind(verify)();
                    entity = michal.done;
                    zuuluu = michal;
                    michal = false;
                    if(entity) { _fun00010_ip = 311; continue _fun00009 }
 264:
                    entity = zuuluu.value;
                    offset = option.getEntry;
                    entity = entity.id;
                    entity = offset.bind(option)(entity);
                    entity = golfie != entity;
                    michal = true;
                    if(entity) { _fun00010_ip = 311; continue _fun00009 }
 294:
                    offset = oscard.bind(verify)();
                    entity = offset.done;
                    zuuluu = offset;
                    michal = false;
                    if(!entity) { _fun00010_ip = 264; continue _fun00009 }
 311:
                    entity = {};
                    entity['hasUsedActivities'] = michal;
                    return entity;
                }
            };
            michal = michal.bind(tangon)(zuuluu);
            report = michal.hasUsedActivities;
            zuuluu = _closure1_slot1;
            michal = 8;
            michal = option[michal];
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = {};
            michal['channelId'] = golfie;
            michal = zuuluu.bind(tangon)(michal);
            zuuluu = michal.canShowBotsBanner;
            michal = michal.canShowAppsOrActivitiesBanner;
            if(!zuuluu) { _fun00008_ip = 181; continue _fun00007 }
 139:
            golfie = oscard.push;
            option = _closure1_slot0;
            verify = _closure1_slot2;
            zuuluu = 5;
            zuuluu = verify[zuuluu];
            zuuluu = option.bind(tangon)(zuuluu);
            zuuluu = zuuluu.DismissibleContent;
            zuuluu = zuuluu.APP_LAUNCHER_ONBOARDING_BOTS_BANNER;
            zuuluu = golfie.bind(oscard)(zuuluu);
 181:
            if(!michal) { _fun00008_ip = 242; continue _fun00007 }
 184:
            zuuluu = oscard.push;
            golfie = _closure1_slot0;
            option = _closure1_slot2;
            michal = 5;
            michal = option[michal];
            michal = golfie.bind(tangon)(michal);
            michal = michal.DismissibleContent;
            if(report) { _fun00008_ip = 231; continue _fun00007 }
 218:
            report = michal.APP_LAUNCHER_ONBOARDING_APPS_BANNER;
            report = zuuluu.bind(oscard)(report);
            _fun00008_ip = 242; continue _fun00007;
 231:
            michal = michal.APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER;
            michal = zuuluu.bind(oscard)(michal);
 242:
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