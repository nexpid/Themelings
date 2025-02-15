// app/modules/app_launcher/native/onboarding/stores/AppLauncherOnboardingPersistedStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBaz;
    zulu = argFred;
    report = argPlugh;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun101146: for(var _fun101146_ip = 0; ; ) switch(_fun101146_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot3;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot2;
            entity = _closure1_slot8;
            entity = entity.bind(zulu)();
            if(entity) { _fun101146_ip = 51; continue _fun101146 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun101146_ip = 92; continue _fun101146;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun101146_ip = 71; continue _fun101146 }
 67:
            oscar = new Array(0);
 71:
            report = _closure1_slot3;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 92:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot7 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun101147: for(var _fun101147_ip = 0; ; ) switch(_fun101147_ip) {
 0:
 2: // try_start_0
            mike = global;
            zulu = mike.Boolean;
            zulu = zulu.prototype;
            tango = zulu.valueOf;
            zulu = tango.call;
            options = mike.Reflect;
            golf = options.construct;
            oscar = mike.Boolean;
            report = new Array(0);
            mike = function() {
                entity = undefined;
                return entity;
            };
            mike = golf.bind(options)(oscar, report, mike);
            mike = zulu.bind(tango)(mike);
            mike = !mike;
            var _closure2_slot0 = mike;
 72: // try_end0
            _fun101147_ip = 76; continue _fun101147;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot8 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot8 = entity;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, mike);
    entity = 0;
    mike = report[entity];
    entity = undefined;
    mike = oscar.bind(entity)(mike);
    var _closure1_slot0 = mike;
    mike = 1;
    mike = report[mike];
    mike = oscar.bind(entity)(mike);
    var _closure1_slot1 = mike;
    mike = 2;
    mike = report[mike];
    mike = oscar.bind(entity)(mike);
    var _closure1_slot2 = mike;
    mike = 3;
    mike = report[mike];
    mike = oscar.bind(entity)(mike);
    var _closure1_slot3 = mike;
    mike = 4;
    mike = report[mike];
    mike = oscar.bind(entity)(mike);
    var _closure1_slot4 = mike;
    golf = {'canShowBotsBanner': false, 'canShowAppsOrActivitiesBanner': false, 'willShowGlobalSearchOnboarding': false, 'timeMs': 0, 'channelId': '0'};
    var _closure1_slot5 = golf;
    mike = {};
    options = null;
    mike['lastSeenTimeMs'] = options;
    mike['triggeredOnboardingContentMetadata'] = golf;
    var _closure1_slot6 = mike;
    mike = 5;
    mike = report[mike];
    mike = oscar.bind(entity)(mike);
    golf = mike.PersistedStore;
    mike = function(argFoo) {
        tango = function() { // Original name: AppLauncherOnboardingPersistedStore
            report = this;
            tango = undefined;
            entity = undefined;
            oscar = _closure1_slot0;
            zulu = _closure2_slot0;
            oscar = oscar.bind(tango)(report, zulu);
            mike = _closure1_slot7;
            entity = arguments;
            entity = mike.bind(tango)(report, zulu, entity);
            return entity;
        };
        var _closure2_slot0 = tango;
        report = _closure1_slot4;
        zulu = undefined;
        mike = argFoo;
        mike = report.bind(zulu)(tango, mike);
        mike = _closure1_slot1;
        report = {};
        entity = 'initialize';
        report['key'] = entity;
        entity = function(argFoo) { // Original name: value
            _fun101152: for(var _fun101152_ip = 0; ; ) switch(_fun101152_ip) {
 0:
                entity = argFoo;
                mike = null;
                if(!(mike != entity)) { _fun101152_ip = 40; continue _fun101152 }
 9:
                mike = _closure1_slot6;
                zulu = entity.lastSeenTimeMs;
                mike['lastSeenTimeMs'] = zulu;
                entity = entity.triggeredOnboardingContentMetadata;
                mike['triggeredOnboardingContentMetadata'] = entity;
 40:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(4);
        entity[0] = report;
        report = {};
        golf = 'getState';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = _closure1_slot6;
            return entity;
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'getLastSeenTimeMs';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = _closure1_slot6;
            entity = entity.lastSeenTimeMs;
            return entity;
        };
        report['value'] = golf;
        entity[2] = report;
        report = {};
        golf = 'getTriggeredOnboardingContentMetadata';
        report['key'] = golf;
        oscar = function() { // Original name: value
            entity = _closure1_slot6;
            entity = entity.triggeredOnboardingContentMetadata;
            return entity;
        };
        report['value'] = oscar;
        entity[3] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    golf = mike.bind(entity)(golf);
    mike = 'AppLauncherOnboardingPersistedStore';
    golf['displayName'] = mike;
    golf['persistKey'] = mike;
    mike = new Array(1);
    options = function(argFoo) {
        _fun101156: for(var _fun101156_ip = 0; ; ) switch(_fun101156_ip) {
 0:
            report = argFoo;
            entity = {};
            tango = null;
            mike = tango == report;
            zulu = undefined;
            if(mike) { _fun101156_ip = 22; continue _fun101156 }
 16:
            zulu = report.lastSeenTimeMs;
 22:
            oscar = tango != zulu;
            mike = null;
            if(!oscar) { _fun101156_ip = 34; continue _fun101156 }
 31:
            mike = zulu;
 34:
            entity['lastSeenTimeMs'] = mike;
            mike = {};
            oscar = tango == report;
            zulu = undefined;
            if(oscar) { _fun101156_ip = 71; continue _fun101156 }
 50:
            oscar = report.triggeredOnboardingContentMetadata;
            options = tango == oscar;
            zulu = undefined;
            if(options) { _fun101156_ip = 71; continue _fun101156 }
 65:
            zulu = oscar.canShowBotsBanner;
 71:
            if(!(tango == zulu)) { _fun101156_ip = 88; continue _fun101156 }
 75:
            oscar = _closure1_slot5;
            zulu = oscar.canShowBotsBanner;
 88:
            mike['canShowBotsBanner'] = zulu;
            oscar = tango == report;
            zulu = undefined;
            if(oscar) { _fun101156_ip = 123; continue _fun101156 }
 102:
            oscar = report.triggeredOnboardingContentMetadata;
            options = tango == oscar;
            zulu = undefined;
            if(options) { _fun101156_ip = 123; continue _fun101156 }
 117:
            zulu = oscar.canShowAppsOrActivitiesBanner;
 123:
            if(!(tango == zulu)) { _fun101156_ip = 140; continue _fun101156 }
 127:
            oscar = _closure1_slot5;
            zulu = oscar.canShowAppsOrActivitiesBanner;
 140:
            mike['canShowAppsOrActivitiesBanner'] = zulu;
            oscar = tango == report;
            zulu = undefined;
            if(oscar) { _fun101156_ip = 175; continue _fun101156 }
 154:
            oscar = report.triggeredOnboardingContentMetadata;
            options = tango == oscar;
            zulu = undefined;
            if(options) { _fun101156_ip = 175; continue _fun101156 }
 169:
            zulu = oscar.willShowGlobalSearchOnboarding;
 175:
            if(!(tango == zulu)) { _fun101156_ip = 192; continue _fun101156 }
 179:
            oscar = _closure1_slot5;
            zulu = oscar.willShowGlobalSearchOnboarding;
 192:
            mike['willShowGlobalSearchOnboarding'] = zulu;
            oscar = tango == report;
            zulu = undefined;
            if(oscar) { _fun101156_ip = 227; continue _fun101156 }
 206:
            oscar = report.triggeredOnboardingContentMetadata;
            options = tango == oscar;
            zulu = undefined;
            if(options) { _fun101156_ip = 227; continue _fun101156 }
 221:
            zulu = oscar.timeMs;
 227:
            if(!(tango == zulu)) { _fun101156_ip = 244; continue _fun101156 }
 231:
            oscar = _closure1_slot5;
            zulu = oscar.timeMs;
 244:
            mike['timeMs'] = zulu;
            oscar = tango == report;
            zulu = undefined;
            if(oscar) { _fun101156_ip = 278; continue _fun101156 }
 258:
            report = report.triggeredOnboardingContentMetadata;
            oscar = tango == report;
            zulu = undefined;
            if(oscar) { _fun101156_ip = 278; continue _fun101156 }
 273:
            zulu = report.channelId;
 278:
            if(!(tango == zulu)) { _fun101156_ip = 294; continue _fun101156 }
 282:
            tango = _closure1_slot5;
            zulu = tango.channelId;
 294:
            mike['channelId'] = zulu;
            entity['triggeredOnboardingContentMetadata'] = mike;
            return entity;
        }
    };
    mike[0] = options;
    golf['migrations'] = mike;
    mike = 6;
    mike = report[mike];
    yankee = oscar.bind(entity)(mike);
    mike = {};
    options = function() { // Original name: handleSetLastSeenTimeMs
        mike = _closure1_slot6;
        entity = global;
        zulu = entity.Date;
        entity = zulu.now;
        entity = entity.bind(zulu)();
        mike['lastSeenTimeMs'] = entity;
        entity = undefined;
        return entity;
    };
    mike['APP_LAUNCHER_ONBOARDING_SET_LAST_SEEN_TIME_MS'] = options;
    tango = function(argFoo) { // Original name: handleSetTriggeredOnboardingContentMetadata
        entity = argFoo;
        mike = entity.triggeredOnboardingContentMetadata;
        entity = _closure1_slot6;
        entity['triggeredOnboardingContentMetadata'] = mike;
        entity = undefined;
        return entity;
    };
    mike['APP_LAUNCHER_ONBOARDING_SET_TRIGGERED_ONBOARDING_CONTENT_METADATA'] = tango;
    tango = golf.prototype;
    tango = Object.create(tango, {constructor: {value: golf}});
    romeo = tango;
    offset = mike;
    mike = new romeo[golf](yankee, offset, verify);
    mike = mike instanceof Object ? mike : tango;
    tango = 7;
    report = report[tango];
    tango = argBar;
    oscar = tango.bind(entity)(report);
    report = oscar.fileFinishedImporting;
    tango = 'modules/app_launcher/native/onboarding/stores/AppLauncherOnboardingPersistedStore.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();