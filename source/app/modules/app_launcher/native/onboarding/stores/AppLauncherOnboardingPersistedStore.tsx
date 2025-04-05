// app/modules/app_launcher/native/onboarding/stores/AppLauncherOnboardingPersistedStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBaz;
    zuuluu = argFre;
    report = argPlu;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
 2: // try_start_0
            michal = global;
            zuuluu = michal.Boolean;
            zuuluu = zuuluu.prototype;
            tangon = zuuluu.valueOf;
            zuuluu = tangon.call;
            option = michal.Reflect;
            golfie = option.construct;
            oscard = michal.Boolean;
            report = new Array(0);
            michal = function() {
                entity = undefined;
                return entity;
            };
            michal = golfie.bind(option)(oscard, report, michal);
            michal = zuuluu.bind(tangon)(michal);
            michal = !michal;
            var _closure2_slot0 = michal;
 72: // try_end0
            _fun00002_ip = 76; continue _fun00001;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            michal = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot7 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot7 = entity;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, michal);
    entity = 0;
    michal = report[entity];
    entity = undefined;
    michal = oscard.bind(entity)(michal);
    var _closure1_slot0 = michal;
    michal = 1;
    michal = report[michal];
    michal = oscard.bind(entity)(michal);
    var _closure1_slot1 = michal;
    michal = 2;
    michal = report[michal];
    michal = oscard.bind(entity)(michal);
    var _closure1_slot2 = michal;
    michal = 3;
    michal = report[michal];
    michal = oscard.bind(entity)(michal);
    var _closure1_slot3 = michal;
    michal = 4;
    michal = report[michal];
    michal = oscard.bind(entity)(michal);
    var _closure1_slot4 = michal;
    golfie = {'canShowBotsBanner': false, 'canShowAppsOrActivitiesBanner': false, 'willShowGlobalSearchOnboarding': false, 'timeMs': 0, 'channelId': '0'};
    var _closure1_slot5 = golfie;
    michal = {};
    option = null;
    michal['lastSeenTimeMs'] = option;
    michal['triggeredOnboardingContentMetadata'] = golfie;
    var _closure1_slot6 = michal;
    michal = 5;
    michal = report[michal];
    michal = oscard.bind(entity)(michal);
    golfie = michal.PersistedStore;
    michal = function(argFoo) {
        tangon = function() { // Original name: AppLauncherOnboardingPersistedStore
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                tangon = this;
                zuuluu = undefined;
                report = undefined;
                entity = _closure1_slot0;
                michal = _closure2_slot0;
                entity = entity.bind(zuuluu)(tangon, michal);
                entity = _closure1_slot3;
                verify = entity.bind(zuuluu)(michal);
                michal = _closure1_slot2;
                entity = _closure1_slot7;
                entity = entity.bind(zuuluu)();
                if(entity) { _fun00004_ip = 69; continue _fun00003 }
 51:
                golfie = verify.apply;
                report = arguments;
                entity = report;
                entity = golfie.bind(verify)(tangon, entity);
                _fun00004_ip = 105; continue _fun00003;
 69:
                golfie = global;
                option = golfie.Reflect;
                golfie = option.construct;
                oscard = _closure1_slot3;
                oscard = oscard.bind(zuuluu)(tangon);
                oscard = oscard.constructor;
                report = arguments;
                entity = golfie.bind(option)(verify, report, oscard);
 105:
                entity = michal.bind(zuuluu)(tangon, entity);
                return entity;
            }
        };
        var _closure2_slot0 = tangon;
        report = _closure1_slot4;
        zuuluu = undefined;
        michal = argFoo;
        michal = report.bind(zuuluu)(tangon, michal);
        michal = _closure1_slot1;
        report = {};
        entity = 'initialize';
        report['key'] = entity;
        entity = function(argFoo) { // Original name: value
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                entity = argFoo;
                michal = null;
                if(!(michal != entity)) { _fun00006_ip = 40; continue _fun00005 }
 9:
                michal = _closure1_slot6;
                zuuluu = entity.lastSeenTimeMs;
                michal['lastSeenTimeMs'] = zuuluu;
                entity = entity.triggeredOnboardingContentMetadata;
                michal['triggeredOnboardingContentMetadata'] = entity;
 40:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(4);
        entity[0] = report;
        report = {};
        golfie = 'getState';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = _closure1_slot6;
            return entity;
        };
        report['value'] = golfie;
        entity[1] = report;
        report = {};
        golfie = 'getLastSeenTimeMs';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = _closure1_slot6;
            entity = entity.lastSeenTimeMs;
            return entity;
        };
        report['value'] = golfie;
        entity[2] = report;
        report = {};
        golfie = 'getTriggeredOnboardingContentMetadata';
        report['key'] = golfie;
        oscard = function() { // Original name: value
            entity = _closure1_slot6;
            entity = entity.triggeredOnboardingContentMetadata;
            return entity;
        };
        report['value'] = oscard;
        entity[3] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    golfie = michal.bind(entity)(golfie);
    michal = 'AppLauncherOnboardingPersistedStore';
    golfie['displayName'] = michal;
    golfie['persistKey'] = michal;
    michal = new Array(1);
    option = function(argFoo) {
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            report = argFoo;
            entity = {};
            tangon = null;
            michal = tangon == report;
            zuuluu = undefined;
            if(michal) { _fun00008_ip = 22; continue _fun00007 }
 16:
            zuuluu = report.lastSeenTimeMs;
 22:
            oscard = tangon != zuuluu;
            michal = null;
            if(!oscard) { _fun00008_ip = 34; continue _fun00007 }
 31:
            michal = zuuluu;
 34:
            entity['lastSeenTimeMs'] = michal;
            michal = {};
            oscard = tangon == report;
            zuuluu = undefined;
            if(oscard) { _fun00008_ip = 71; continue _fun00007 }
 50:
            oscard = report.triggeredOnboardingContentMetadata;
            option = tangon == oscard;
            zuuluu = undefined;
            if(option) { _fun00008_ip = 71; continue _fun00007 }
 65:
            zuuluu = oscard.canShowBotsBanner;
 71:
            if(!(tangon == zuuluu)) { _fun00008_ip = 88; continue _fun00007 }
 75:
            oscard = _closure1_slot5;
            zuuluu = oscard.canShowBotsBanner;
 88:
            michal['canShowBotsBanner'] = zuuluu;
            oscard = tangon == report;
            zuuluu = undefined;
            if(oscard) { _fun00008_ip = 123; continue _fun00007 }
 102:
            oscard = report.triggeredOnboardingContentMetadata;
            option = tangon == oscard;
            zuuluu = undefined;
            if(option) { _fun00008_ip = 123; continue _fun00007 }
 117:
            zuuluu = oscard.canShowAppsOrActivitiesBanner;
 123:
            if(!(tangon == zuuluu)) { _fun00008_ip = 140; continue _fun00007 }
 127:
            oscard = _closure1_slot5;
            zuuluu = oscard.canShowAppsOrActivitiesBanner;
 140:
            michal['canShowAppsOrActivitiesBanner'] = zuuluu;
            oscard = tangon == report;
            zuuluu = undefined;
            if(oscard) { _fun00008_ip = 175; continue _fun00007 }
 154:
            oscard = report.triggeredOnboardingContentMetadata;
            option = tangon == oscard;
            zuuluu = undefined;
            if(option) { _fun00008_ip = 175; continue _fun00007 }
 169:
            zuuluu = oscard.willShowGlobalSearchOnboarding;
 175:
            if(!(tangon == zuuluu)) { _fun00008_ip = 192; continue _fun00007 }
 179:
            oscard = _closure1_slot5;
            zuuluu = oscard.willShowGlobalSearchOnboarding;
 192:
            michal['willShowGlobalSearchOnboarding'] = zuuluu;
            oscard = tangon == report;
            zuuluu = undefined;
            if(oscard) { _fun00008_ip = 227; continue _fun00007 }
 206:
            oscard = report.triggeredOnboardingContentMetadata;
            option = tangon == oscard;
            zuuluu = undefined;
            if(option) { _fun00008_ip = 227; continue _fun00007 }
 221:
            zuuluu = oscard.timeMs;
 227:
            if(!(tangon == zuuluu)) { _fun00008_ip = 244; continue _fun00007 }
 231:
            oscard = _closure1_slot5;
            zuuluu = oscard.timeMs;
 244:
            michal['timeMs'] = zuuluu;
            oscard = tangon == report;
            zuuluu = undefined;
            if(oscard) { _fun00008_ip = 278; continue _fun00007 }
 258:
            report = report.triggeredOnboardingContentMetadata;
            oscard = tangon == report;
            zuuluu = undefined;
            if(oscard) { _fun00008_ip = 278; continue _fun00007 }
 273:
            zuuluu = report.channelId;
 278:
            if(!(tangon == zuuluu)) { _fun00008_ip = 294; continue _fun00007 }
 282:
            tangon = _closure1_slot5;
            zuuluu = tangon.channelId;
 294:
            michal['channelId'] = zuuluu;
            entity['triggeredOnboardingContentMetadata'] = michal;
            return entity;
        }
    };
    michal[0] = option;
    golfie['migrations'] = michal;
    michal = 6;
    michal = report[michal];
    yankee = oscard.bind(entity)(michal);
    michal = {};
    option = function() { // Original name: handleSetLastSeenTimeMs
        michal = _closure1_slot6;
        entity = global;
        zuuluu = entity.Date;
        entity = zuuluu.now;
        entity = entity.bind(zuuluu)();
        michal['lastSeenTimeMs'] = entity;
        entity = undefined;
        return entity;
    };
    michal['APP_LAUNCHER_ONBOARDING_SET_LAST_SEEN_TIME_MS'] = option;
    tangon = function(argFoo) { // Original name: handleSetTriggeredOnboardingContentMetadata
        entity = argFoo;
        michal = entity.triggeredOnboardingContentMetadata;
        entity = _closure1_slot6;
        entity['triggeredOnboardingContentMetadata'] = michal;
        entity = undefined;
        return entity;
    };
    michal['APP_LAUNCHER_ONBOARDING_SET_TRIGGERED_ONBOARDING_CONTENT_METADATA'] = tangon;
    tangon = golfie.prototype;
    tangon = Object.create(tangon, {constructor: {value: golfie}});
    romeon = tangon;
    offset = michal;
    michal = new romeon[golfie](yankee, offset, verify);
    michal = michal instanceof Object ? michal : tangon;
    tangon = 7;
    report = report[tangon];
    tangon = argBar;
    oscard = tangon.bind(entity)(report);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/app_launcher/native/onboarding/stores/AppLauncherOnboardingPersistedStore.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();