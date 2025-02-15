// app/modules/feedback/native/RequestReviewStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot6;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot5;
            entity = _closure1_slot23;
            entity = entity.bind(zulu)();
            if(entity) { _fun00002_ip = 51; continue _fun00001 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun00002_ip = 92; continue _fun00001;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun00002_ip = 71; continue _fun00001 }
 67:
            oscar = new Array(0);
 71:
            report = _closure1_slot6;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 92:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot22 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
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
            _fun00004_ip = 76; continue _fun00003;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot23 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot23 = entity;
    entity = function() { // Original name: delayShowReviewRequestModal
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            mike = _closure1_slot26;
            entity = undefined;
            mike = mike.bind(entity)();
            mike = _closure1_slot19;
            if(!mike) { _fun00006_ip = 46; continue _fun00005 }
 20:
            tango = _closure1_slot13;
            tango = entity !== tango;
            if(!tango) { _fun00006_ip = 43; continue _fun00005 }
 31:
            oscar = _closure1_slot13;
            report = _closure1_slot17;
            tango = oscar < report;
 43:
            mike = tango;
 46:
            if(!mike) { _fun00006_ip = 75; continue _fun00005 }
 49:
            mike = global;
            report = mike.setTimeout;
            tango = _closure1_slot25;
            mike = _closure1_slot16;
            mike = report.bind(entity)(tango, mike);
            _closure1_slot21 = mike;
 75:
            return entity;
        }
    };
    var _closure1_slot24 = entity;
    entity = function() { // Original name: showReviewRequestModal
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            tango = _closure1_slot0;
            zulu = _closure1_slot2;
            entity = 12;
            zulu = zulu[entity];
            entity = undefined;
            tango = tango.bind(entity)(zulu);
            zulu = tango.getRootNavigationRef;
            verify = zulu.bind(tango)();
            golf = {};
            tango = null;
            zulu = tango != verify;
            if(!zulu) { _fun00008_ip = 56; continue _fun00007 }
 46:
            report = verify.isReady;
            zulu = report.bind(verify)();
 56:
            if(!zulu) { _fun00008_ip = 104; continue _fun00007 }
 59:
            oscar = _closure1_slot0;
            options = _closure1_slot2;
            report = 13;
            report = options[report];
            options = oscar.bind(entity)(report);
            oscar = options.coerceGuildsRoute;
            report = verify.getCurrentRoute;
            report = report.bind(verify)();
            report = oscar.bind(options)(report);
            zulu = tango != report;
 104:
            golf['isViewingChat'] = zulu;
            zulu = _closure1_slot11;
            zulu = zulu.keyboardOpen;
            golf['isKeyboardOpen'] = zulu;
            report = _closure1_slot10;
            zulu = report.getVoiceChannelId;
            zulu = zulu.bind(report)();
            zulu = tango != zulu;
            golf['isInVoice'] = zulu;
            zulu = golf.isViewingChat;
            options = !zulu;
            if(options) { _fun00008_ip = 165; continue _fun00007 }
 159:
            options = golf.isKeyboardOpen;
 165:
            if(options) { _fun00008_ip = 174; continue _fun00007 }
 168:
            options = golf.isInVoice;
 174:
            tango = _closure1_slot0;
            report = _closure1_slot2;
            zulu = 10;
            zulu = report[zulu];
            zulu = tango.bind(entity)(zulu);
            oscar = zulu.RequestMobileAppReviewFeatureFlagExperiment;
            report = oscar.getCurrentConfig;
            tango = {};
            zulu = 'RequestReviewStore';
            tango['location'] = zulu;
            zulu = {};
            verify = true;
            zulu['autoTrackExposure'] = verify;
            zulu = report.bind(oscar)(tango, zulu);
            tango = zulu.canRequestReview;
            report = _closure1_slot1;
            oscar = _closure1_slot2;
            zulu = 17;
            zulu = oscar[zulu];
            oscar = report.bind(entity)(zulu);
            report = oscar.track;
            zulu = _closure1_slot12;
            if(options) { _fun00008_ip = 339; continue _fun00007 }
 271:
            options = zulu.REVIEW_REQUEST_SHOW_ATTEMPTED;
            options = report.bind(oscar)(options);
            if(!tango) { _fun00008_ip = 400; continue _fun00007 }
 285:
            options = _closure1_slot15;
            tango = _closure1_slot18;
            tango['revision'] = options;
            tango = _closure1_slot27;
            tango = tango.bind(entity)();
            options = _closure1_slot1;
            verify = _closure1_slot2;
            tango = 11;
            tango = verify[tango];
            tango = options.bind(entity)(tango);
            tango = tango.bind(entity)();
            tango = false;
            _closure1_slot19 = tango;
            _fun00008_ip = 400; continue _fun00007;
 339:
            tango = zulu.REVIEW_REQUEST_DEFERRED;
            zulu = {};
            options = golf.isKeyboardOpen;
            zulu['is_keyboard_open'] = options;
            options = golf.isInVoice;
            zulu['is_in_voice'] = options;
            golf = golf.isViewingChat;
            zulu['is_viewing_chat'] = golf;
            zulu = report.bind(oscar)(tango, zulu);
            mike = _closure1_slot24;
            mike = mike.bind(entity)();
 400:
            return entity;
        }
    };
    var _closure1_slot25 = entity;
    verify = function() { // Original name: handleConnectionClosedOrInterrupted
        mike = _closure1_slot26;
        entity = undefined;
        mike = mike.bind(entity)();
        return entity;
    };
    entity = function() { // Original name: cancelExistingTimeout
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            zulu = _closure1_slot21;
            entity = _closure1_slot20;
            if(!(zulu !== entity)) { _fun00010_ip = 42; continue _fun00009 }
 15:
            entity = global;
            tango = entity.clearTimeout;
            zulu = _closure1_slot21;
            entity = undefined;
            entity = tango.bind(entity)(zulu);
            entity = _closure1_slot20;
            _closure1_slot21 = entity;
 42:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot26 = entity;
    entity = function() { // Original name: writePersistedState
        tango = _closure1_slot0;
        zulu = _closure1_slot2;
        entity = 16;
        zulu = zulu[entity];
        entity = undefined;
        zulu = tango.bind(entity)(zulu);
        report = zulu.Storage;
        tango = report.set;
        zulu = _closure1_slot14;
        mike = _closure1_slot18;
        mike = tango.bind(report)(zulu, mike);
        return entity;
    };
    var _closure1_slot27 = entity;
    entity = global;
    offset = entity.Object;
    options = offset.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = options.bind(offset)(zulu, entity, mike);
    entity = 0;
    mike = oscar[entity];
    entity = undefined;
    mike = golf.bind(entity)(mike);
    var _closure1_slot3 = mike;
    options = 1;
    mike = oscar[options];
    mike = golf.bind(entity)(mike);
    var _closure1_slot4 = mike;
    mike = 2;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot5 = mike;
    mike = 3;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot6 = mike;
    mike = 4;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot7 = mike;
    mike = 5;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot8 = mike;
    mike = 6;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot9 = mike;
    mike = 7;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot10 = mike;
    mike = 8;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot11 = mike;
    mike = 9;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    mike = mike.AnalyticEvents;
    var _closure1_slot12 = mike;
    mike = 'RequestReviewStore';
    var _closure1_slot14 = mike;
    var _closure1_slot15 = options;
    options = 60000;
    var _closure1_slot16 = options;
    options = 2300;
    var _closure1_slot17 = options;
    options = {'revision': 0, 'firstUse': 0};
    var _closure1_slot18 = options;
    options = false;
    var _closure1_slot19 = options;
    options = -1;
    var _closure1_slot20 = options;
    var _closure1_slot21 = options;
    options = 18;
    options = oscar[options];
    options = golf.bind(entity)(options);
    offset = options.Store;
    options = function(argFoo) {
        tango = function() { // Original name: RequestReviewStore
            report = this;
            tango = undefined;
            entity = undefined;
            oscar = _closure1_slot3;
            zulu = _closure2_slot0;
            oscar = oscar.bind(tango)(report, zulu);
            mike = _closure1_slot22;
            entity = arguments;
            entity = mike.bind(tango)(report, zulu, entity);
            return entity;
        };
        var _closure2_slot0 = tango;
        oscar = _closure1_slot7;
        zulu = undefined;
        report = argFoo;
        report = oscar.bind(zulu)(tango, report);
        mike = _closure1_slot4;
        report = {};
        oscar = 'initialize';
        report['key'] = oscar;
        entity = function() { // Original name: value
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                report = this;
                tango = _closure1_slot0;
                zulu = _closure1_slot2;
                entity = 16;
                zulu = zulu[entity];
                entity = undefined;
                zulu = tango.bind(entity)(zulu);
                oscar = zulu.Storage;
                tango = oscar.get;
                zulu = _closure1_slot14;
                zulu = tango.bind(oscar)(zulu);
                tango = null;
                if(!(tango == zulu)) { _fun00012_ip = 68; continue _fun00011 }
 54:
                zulu = {'firstUse': 0, 'revision': 0};
 68:
                _closure1_slot18 = zulu;
                tango = report.waitFor;
                zulu = _closure1_slot8;
                mike = _closure1_slot9;
                mike = tango.bind(report)(zulu, mike);
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(1);
        entity[0] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    options = options.bind(entity)(offset);
    options['displayName'] = mike;
    mike = 19;
    mike = oscar[mike];
    foxtrot = golf.bind(entity)(mike);
    mike = {};
    offset = function(argFoo) { // Original name: handleConnectionOpen
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            entity = argFoo;
            zulu = entity.user;
            golf = entity.guilds;
            entity = _closure1_slot18;
            tango = entity.firstUse;
            entity = 0;
            if(!(entity === tango)) { _fun00014_ip = 70; continue _fun00013 }
 33:
            tango = _closure1_slot18;
            entity = global;
            report = entity.Date;
            entity = report.now;
            entity = entity.bind(report)();
            tango['firstUse'] = entity;
            tango = _closure1_slot27;
            entity = undefined;
            entity = tango.bind(entity)();
 70:
            tango = {};
            oscar = _closure1_slot0;
            report = _closure1_slot2;
            entity = 10;
            report = report[entity];
            entity = undefined;
            oscar = oscar.bind(entity)(report);
            report = oscar.shouldOnlyTargetHFUs;
            report = report.bind(oscar)();
            report = !report;
            if(report) { _fun00014_ip = 161; continue _fun00013 }
 110:
            options = _closure1_slot0;
            verify = _closure1_slot2;
            oscar = 14;
            oscar = verify[oscar];
            verify = options.bind(entity)(oscar);
            options = verify.isInstallFrequentlyUsed;
            offset = _closure1_slot9;
            oscar = offset.getState;
            oscar = oscar.bind(offset)();
            oscar = oscar.sessions;
            report = options.bind(verify)(oscar);
 161:
            tango['isInstallUsedFrequently'] = report;
            report = _closure1_slot18;
            oscar = report.firstUse;
            report = global;
            options = report.Date;
            report = options.now;
            options = report.bind(options)();
            report = 864000000;
            report = options - report;
            report = oscar < report;
            tango['isInstallOldEnough'] = report;
            oscar = golf.some;
            report = function(argFoo) {
                entity = argFoo;
                mike = entity.member_count;
                entity = 5;
                entity = mike >= entity;
                return entity;
            };
            report = oscar.bind(golf)(report);
            tango['isInLargeEnoughGuild'] = report;
            report = zulu.verified;
            zulu = true;
            zulu = zulu === report;
            tango['isAccountVerified'] = zulu;
            zulu = _closure1_slot18;
            report = zulu.revision;
            zulu = _closure1_slot15;
            zulu = report < zulu;
            tango['isNewRevision'] = zulu;
            zulu = tango.isNewRevision;
            if(!zulu) { _fun00014_ip = 381; continue _fun00013 }
 286:
            report = _closure1_slot1;
            oscar = _closure1_slot2;
            zulu = 17;
            zulu = oscar[zulu];
            golf = report.bind(entity)(zulu);
            oscar = golf.track;
            zulu = _closure1_slot12;
            report = zulu.REVIEW_REQUEST_ELIGIBILITY_CHECKED;
            zulu = {};
            options = tango.isInstallUsedFrequently;
            zulu['is_hfu'] = options;
            options = tango.isInstallOldEnough;
            zulu['is_install_old_enough'] = options;
            options = tango.isInLargeEnoughGuild;
            zulu['is_in_large_enough_guild'] = options;
            options = tango.isAccountVerified;
            zulu['is_account_verified'] = options;
            zulu = oscar.bind(golf)(report, zulu);
 381:
            zulu = tango.isInstallOldEnough;
            if(!zulu) { _fun00014_ip = 396; continue _fun00013 }
 390:
            zulu = tango.isInstallUsedFrequently;
 396:
            if(!zulu) { _fun00014_ip = 405; continue _fun00013 }
 399:
            zulu = tango.isAccountVerified;
 405:
            if(!zulu) { _fun00014_ip = 414; continue _fun00013 }
 408:
            zulu = tango.isInLargeEnoughGuild;
 414:
            if(!zulu) { _fun00014_ip = 423; continue _fun00013 }
 417:
            zulu = tango.isNewRevision;
 423:
            _closure1_slot19 = zulu;
            mike = _closure1_slot24;
            mike = mike.bind(entity)();
            return entity;
        }
    };
    mike['CONNECTION_OPEN'] = offset;
    offset = function() { // Original name: handleConnectionResumed
        mike = _closure1_slot24;
        entity = undefined;
        mike = mike.bind(entity)();
        return entity;
    };
    mike['CONNECTION_RESUMED'] = offset;
    mike['CONNECTION_CLOSED'] = verify;
    mike['CONNECTION_INTERRUPTED'] = verify;
    verify = function(argFoo) { // Original name: handleTTIRecorded
        entity = argFoo;
        mike = entity.tti;
        var _closure1_slot13 = mike;
        mike = _closure1_slot24;
        entity = undefined;
        mike = mike.bind(entity)();
        return entity;
    };
    mike['TTI_RECORDED'] = verify;
    tango = function(argFoo) { // Original name: handleAppStateUpdate
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            entity = argFoo;
            tango = entity.state;
            report = _closure1_slot0;
            zulu = _closure1_slot2;
            entity = 15;
            zulu = zulu[entity];
            entity = undefined;
            zulu = report.bind(entity)(zulu);
            zulu = zulu.AppStates;
            zulu = zulu.ACTIVE;
            if(!(tango !== zulu)) { _fun00016_ip = 59; continue _fun00015 }
 49:
            zulu = _closure1_slot26;
            zulu = zulu.bind(entity)();
            _fun00016_ip = 67; continue _fun00015;
 59:
            mike = _closure1_slot24;
            mike = mike.bind(entity)();
 67:
            return entity;
        }
    };
    mike['APP_STATE_UPDATE'] = tango;
    tango = options.prototype;
    tango = Object.create(tango, {constructor: {value: options}});
    backup = tango;
    romeo = mike;
    mike = new backup[options](foxtrot, romeo, yankee);
    mike = mike instanceof Object ? mike : tango;
    tango = 20;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/feedback/native/RequestReviewStore.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();