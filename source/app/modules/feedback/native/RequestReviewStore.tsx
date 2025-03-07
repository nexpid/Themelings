// app/modules/feedback/native/RequestReviewStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            oscard = argBaz;
            michal = _closure1_slot6;
            zuuluu = undefined;
            entity = argBar;
            verify = michal.bind(zuuluu)(entity);
            michal = _closure1_slot5;
            entity = _closure1_slot23;
            entity = entity.bind(zuuluu)();
            if(entity) { _fun00002_ip = 51; continue _fun00001 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tangon, oscard);
            _fun00002_ip = 92; continue _fun00001;
 51:
            golfie = global;
            option = golfie.Reflect;
            golfie = option.construct;
            if(oscard) { _fun00002_ip = 71; continue _fun00001 }
 67:
            oscard = new Array(0);
 71:
            report = _closure1_slot6;
            report = report.bind(zuuluu)(tangon);
            report = report.constructor;
            entity = golfie.bind(option)(verify, oscard, report);
 92:
            entity = michal.bind(zuuluu)(tangon, entity);
            return entity;
        }
    };
    var _closure1_slot22 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
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
            _fun00004_ip = 76; continue _fun00003;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            michal = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot23 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot23 = entity;
    entity = function() { // Original name: delayShowReviewRequestModal
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            michal = _closure1_slot26;
            entity = undefined;
            michal = michal.bind(entity)();
            michal = _closure1_slot19;
            if(!michal) { _fun00006_ip = 46; continue _fun00005 }
 20:
            tangon = _closure1_slot13;
            tangon = entity !== tangon;
            if(!tangon) { _fun00006_ip = 43; continue _fun00005 }
 31:
            oscard = _closure1_slot13;
            report = _closure1_slot17;
            tangon = oscard < report;
 43:
            michal = tangon;
 46:
            if(!michal) { _fun00006_ip = 75; continue _fun00005 }
 49:
            michal = global;
            report = michal.setTimeout;
            tangon = _closure1_slot25;
            michal = _closure1_slot16;
            michal = report.bind(entity)(tangon, michal);
            _closure1_slot21 = michal;
 75:
            return entity;
        }
    };
    var _closure1_slot24 = entity;
    entity = function() { // Original name: showReviewRequestModal
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 12;
            zuuluu = zuuluu[entity];
            entity = undefined;
            tangon = tangon.bind(entity)(zuuluu);
            zuuluu = tangon.getRootNavigationRef;
            verify = zuuluu.bind(tangon)();
            golfie = {};
            tangon = null;
            zuuluu = tangon != verify;
            if(!zuuluu) { _fun00008_ip = 56; continue _fun00007 }
 46:
            report = verify.isReady;
            zuuluu = report.bind(verify)();
 56:
            if(!zuuluu) { _fun00008_ip = 104; continue _fun00007 }
 59:
            oscard = _closure1_slot0;
            option = _closure1_slot2;
            report = 13;
            report = option[report];
            option = oscard.bind(entity)(report);
            oscard = option.coerceGuildsRoute;
            report = verify.getCurrentRoute;
            report = report.bind(verify)();
            report = oscard.bind(option)(report);
            zuuluu = tangon != report;
 104:
            golfie['isViewingChat'] = zuuluu;
            zuuluu = _closure1_slot11;
            zuuluu = zuuluu.keyboardOpen;
            golfie['isKeyboardOpen'] = zuuluu;
            report = _closure1_slot10;
            zuuluu = report.getVoiceChannelId;
            zuuluu = zuuluu.bind(report)();
            zuuluu = tangon != zuuluu;
            golfie['isInVoice'] = zuuluu;
            zuuluu = golfie.isViewingChat;
            option = !zuuluu;
            if(option) { _fun00008_ip = 165; continue _fun00007 }
 159:
            option = golfie.isKeyboardOpen;
 165:
            if(option) { _fun00008_ip = 174; continue _fun00007 }
 168:
            option = golfie.isInVoice;
 174:
            tangon = _closure1_slot0;
            report = _closure1_slot2;
            zuuluu = 10;
            zuuluu = report[zuuluu];
            zuuluu = tangon.bind(entity)(zuuluu);
            oscard = zuuluu.RequestMobileAppReviewFeatureFlagExperiment;
            report = oscard.getCurrentConfig;
            tangon = {};
            zuuluu = 'RequestReviewStore';
            tangon['location'] = zuuluu;
            zuuluu = {};
            verify = true;
            zuuluu['autoTrackExposure'] = verify;
            zuuluu = report.bind(oscard)(tangon, zuuluu);
            tangon = zuuluu.canRequestReview;
            report = _closure1_slot1;
            oscard = _closure1_slot2;
            zuuluu = 17;
            zuuluu = oscard[zuuluu];
            oscard = report.bind(entity)(zuuluu);
            report = oscard.track;
            zuuluu = _closure1_slot12;
            if(option) { _fun00008_ip = 339; continue _fun00007 }
 271:
            option = zuuluu.REVIEW_REQUEST_SHOW_ATTEMPTED;
            option = report.bind(oscard)(option);
            if(!tangon) { _fun00008_ip = 400; continue _fun00007 }
 285:
            option = _closure1_slot15;
            tangon = _closure1_slot18;
            tangon['revision'] = option;
            tangon = _closure1_slot27;
            tangon = tangon.bind(entity)();
            option = _closure1_slot1;
            verify = _closure1_slot2;
            tangon = 11;
            tangon = verify[tangon];
            tangon = option.bind(entity)(tangon);
            tangon = tangon.bind(entity)();
            tangon = false;
            _closure1_slot19 = tangon;
            _fun00008_ip = 400; continue _fun00007;
 339:
            tangon = zuuluu.REVIEW_REQUEST_DEFERRED;
            zuuluu = {};
            option = golfie.isKeyboardOpen;
            zuuluu['is_keyboard_open'] = option;
            option = golfie.isInVoice;
            zuuluu['is_in_voice'] = option;
            golfie = golfie.isViewingChat;
            zuuluu['is_viewing_chat'] = golfie;
            zuuluu = report.bind(oscard)(tangon, zuuluu);
            michal = _closure1_slot24;
            michal = michal.bind(entity)();
 400:
            return entity;
        }
    };
    var _closure1_slot25 = entity;
    verify = function() { // Original name: handleConnectionClosedOrInterrupted
        michal = _closure1_slot26;
        entity = undefined;
        michal = michal.bind(entity)();
        return entity;
    };
    entity = function() { // Original name: cancelExistingTimeout
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            zuuluu = _closure1_slot21;
            entity = _closure1_slot20;
            if(!(zuuluu !== entity)) { _fun00010_ip = 42; continue _fun00009 }
 15:
            entity = global;
            tangon = entity.clearTimeout;
            zuuluu = _closure1_slot21;
            entity = undefined;
            entity = tangon.bind(entity)(zuuluu);
            entity = _closure1_slot20;
            _closure1_slot21 = entity;
 42:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot26 = entity;
    entity = function() { // Original name: writePersistedState
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot2;
        entity = 16;
        zuuluu = zuuluu[entity];
        entity = undefined;
        zuuluu = tangon.bind(entity)(zuuluu);
        report = zuuluu.Storage;
        tangon = report.set;
        zuuluu = _closure1_slot14;
        michal = _closure1_slot18;
        michal = tangon.bind(report)(zuuluu, michal);
        return entity;
    };
    var _closure1_slot27 = entity;
    entity = global;
    offset = entity.Object;
    option = offset.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = option.bind(offset)(zuuluu, entity, michal);
    entity = 0;
    michal = oscard[entity];
    entity = undefined;
    michal = golfie.bind(entity)(michal);
    var _closure1_slot3 = michal;
    option = 1;
    michal = oscard[option];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot4 = michal;
    michal = 2;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot5 = michal;
    michal = 3;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot6 = michal;
    michal = 4;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot7 = michal;
    michal = 5;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot8 = michal;
    michal = 6;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot9 = michal;
    michal = 7;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot10 = michal;
    michal = 8;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot11 = michal;
    michal = 9;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    michal = michal.AnalyticEvents;
    var _closure1_slot12 = michal;
    michal = 'RequestReviewStore';
    var _closure1_slot14 = michal;
    var _closure1_slot15 = option;
    option = 60000;
    var _closure1_slot16 = option;
    option = 2300;
    var _closure1_slot17 = option;
    option = {'revision': 0, 'firstUse': 0};
    var _closure1_slot18 = option;
    option = false;
    var _closure1_slot19 = option;
    option = -1;
    var _closure1_slot20 = option;
    var _closure1_slot21 = option;
    option = 18;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    offset = option.Store;
    option = function(argFoo) {
        tangon = function() { // Original name: RequestReviewStore
            report = this;
            tangon = undefined;
            entity = undefined;
            oscard = _closure1_slot3;
            zuuluu = _closure2_slot0;
            oscard = oscard.bind(tangon)(report, zuuluu);
            michal = _closure1_slot22;
            entity = arguments;
            entity = michal.bind(tangon)(report, zuuluu, entity);
            return entity;
        };
        var _closure2_slot0 = tangon;
        oscard = _closure1_slot7;
        zuuluu = undefined;
        report = argFoo;
        report = oscard.bind(zuuluu)(tangon, report);
        michal = _closure1_slot4;
        report = {};
        oscard = 'initialize';
        report['key'] = oscard;
        entity = function() { // Original name: value
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                report = this;
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot2;
                entity = 16;
                zuuluu = zuuluu[entity];
                entity = undefined;
                zuuluu = tangon.bind(entity)(zuuluu);
                oscard = zuuluu.Storage;
                tangon = oscard.get;
                zuuluu = _closure1_slot14;
                zuuluu = tangon.bind(oscard)(zuuluu);
                tangon = null;
                if(!(tangon == zuuluu)) { _fun00012_ip = 68; continue _fun00011 }
 54:
                zuuluu = {'firstUse': 0, 'revision': 0};
 68:
                _closure1_slot18 = zuuluu;
                tangon = report.waitFor;
                zuuluu = _closure1_slot8;
                michal = _closure1_slot9;
                michal = tangon.bind(report)(zuuluu, michal);
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(1);
        entity[0] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    option = option.bind(entity)(offset);
    option['displayName'] = michal;
    michal = 19;
    michal = oscard[michal];
    foxtra = golfie.bind(entity)(michal);
    michal = {};
    offset = function(argFoo) { // Original name: handleConnectionOpen
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.user;
            golfie = entity.guilds;
            entity = _closure1_slot18;
            tangon = entity.firstUse;
            entity = 0;
            if(!(entity === tangon)) { _fun00014_ip = 70; continue _fun00013 }
 33:
            tangon = _closure1_slot18;
            entity = global;
            report = entity.Date;
            entity = report.now;
            entity = entity.bind(report)();
            tangon['firstUse'] = entity;
            tangon = _closure1_slot27;
            entity = undefined;
            entity = tangon.bind(entity)();
 70:
            tangon = {};
            oscard = _closure1_slot0;
            report = _closure1_slot2;
            entity = 10;
            report = report[entity];
            entity = undefined;
            oscard = oscard.bind(entity)(report);
            report = oscard.shouldOnlyTargetHFUs;
            report = report.bind(oscard)();
            report = !report;
            if(report) { _fun00014_ip = 161; continue _fun00013 }
 110:
            option = _closure1_slot0;
            verify = _closure1_slot2;
            oscard = 14;
            oscard = verify[oscard];
            verify = option.bind(entity)(oscard);
            option = verify.isInstallFrequentlyUsed;
            offset = _closure1_slot9;
            oscard = offset.getState;
            oscard = oscard.bind(offset)();
            oscard = oscard.sessions;
            report = option.bind(verify)(oscard);
 161:
            tangon['isInstallUsedFrequently'] = report;
            report = _closure1_slot18;
            oscard = report.firstUse;
            report = global;
            option = report.Date;
            report = option.now;
            option = report.bind(option)();
            report = 864000000;
            report = option - report;
            report = oscard < report;
            tangon['isInstallOldEnough'] = report;
            oscard = golfie.some;
            report = function(argFoo) {
                entity = argFoo;
                michal = entity.member_count;
                entity = 5;
                entity = michal >= entity;
                return entity;
            };
            report = oscard.bind(golfie)(report);
            tangon['isInLargeEnoughGuild'] = report;
            report = zuuluu.verified;
            zuuluu = true;
            zuuluu = zuuluu === report;
            tangon['isAccountVerified'] = zuuluu;
            zuuluu = _closure1_slot18;
            report = zuuluu.revision;
            zuuluu = _closure1_slot15;
            zuuluu = report < zuuluu;
            tangon['isNewRevision'] = zuuluu;
            zuuluu = tangon.isNewRevision;
            if(!zuuluu) { _fun00014_ip = 381; continue _fun00013 }
 286:
            report = _closure1_slot1;
            oscard = _closure1_slot2;
            zuuluu = 17;
            zuuluu = oscard[zuuluu];
            golfie = report.bind(entity)(zuuluu);
            oscard = golfie.track;
            zuuluu = _closure1_slot12;
            report = zuuluu.REVIEW_REQUEST_ELIGIBILITY_CHECKED;
            zuuluu = {};
            option = tangon.isInstallUsedFrequently;
            zuuluu['is_hfu'] = option;
            option = tangon.isInstallOldEnough;
            zuuluu['is_install_old_enough'] = option;
            option = tangon.isInLargeEnoughGuild;
            zuuluu['is_in_large_enough_guild'] = option;
            option = tangon.isAccountVerified;
            zuuluu['is_account_verified'] = option;
            zuuluu = oscard.bind(golfie)(report, zuuluu);
 381:
            zuuluu = tangon.isInstallOldEnough;
            if(!zuuluu) { _fun00014_ip = 396; continue _fun00013 }
 390:
            zuuluu = tangon.isInstallUsedFrequently;
 396:
            if(!zuuluu) { _fun00014_ip = 405; continue _fun00013 }
 399:
            zuuluu = tangon.isAccountVerified;
 405:
            if(!zuuluu) { _fun00014_ip = 414; continue _fun00013 }
 408:
            zuuluu = tangon.isInLargeEnoughGuild;
 414:
            if(!zuuluu) { _fun00014_ip = 423; continue _fun00013 }
 417:
            zuuluu = tangon.isNewRevision;
 423:
            _closure1_slot19 = zuuluu;
            michal = _closure1_slot24;
            michal = michal.bind(entity)();
            return entity;
        }
    };
    michal['CONNECTION_OPEN'] = offset;
    offset = function() { // Original name: handleConnectionResumed
        michal = _closure1_slot24;
        entity = undefined;
        michal = michal.bind(entity)();
        return entity;
    };
    michal['CONNECTION_RESUMED'] = offset;
    michal['CONNECTION_CLOSED'] = verify;
    michal['CONNECTION_INTERRUPTED'] = verify;
    verify = function(argFoo) { // Original name: handleTTIRecorded
        entity = argFoo;
        michal = entity.tti;
        var _closure1_slot13 = michal;
        michal = _closure1_slot24;
        entity = undefined;
        michal = michal.bind(entity)();
        return entity;
    };
    michal['TTI_RECORDED'] = verify;
    tangon = function(argFoo) { // Original name: handleAppStateUpdate
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            entity = argFoo;
            tangon = entity.state;
            report = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 15;
            zuuluu = zuuluu[entity];
            entity = undefined;
            zuuluu = report.bind(entity)(zuuluu);
            zuuluu = zuuluu.AppStates;
            zuuluu = zuuluu.ACTIVE;
            if(!(tangon !== zuuluu)) { _fun00016_ip = 59; continue _fun00015 }
 49:
            zuuluu = _closure1_slot26;
            zuuluu = zuuluu.bind(entity)();
            _fun00016_ip = 67; continue _fun00015;
 59:
            michal = _closure1_slot24;
            michal = michal.bind(entity)();
 67:
            return entity;
        }
    };
    michal['APP_STATE_UPDATE'] = tangon;
    tangon = option.prototype;
    tangon = Object.create(tangon, {constructor: {value: option}});
    backup = tangon;
    romeon = michal;
    michal = new backup[option](foxtra, romeon, yankee);
    michal = michal instanceof Object ? michal : tangon;
    tangon = 20;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/feedback/native/RequestReviewStore.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();