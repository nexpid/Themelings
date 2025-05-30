// app/modules/feedback/native/RequestReviewStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
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
            _closure1_slot16 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot16 = entity;
    entity = function() { // Original name: delayShowReviewRequestModal
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            michal = _closure1_slot19;
            entity = undefined;
            michal = michal.bind(entity)();
            michal = _closure1_slot14;
            if(!michal) { _fun00004_ip = 48; continue _fun00003 }
 20:
            tangon = _closure1_slot11;
            tangon = entity !== tangon;
            if(!tangon) { _fun00004_ip = 45; continue _fun00003 }
 31:
            oscard = _closure1_slot11;
            report = 2300;
            tangon = oscard < report;
 45:
            michal = tangon;
 48:
            if(!michal) { _fun00004_ip = 79; continue _fun00003 }
 51:
            michal = global;
            report = michal.setTimeout;
            tangon = _closure1_slot18;
            michal = 60000;
            michal = report.bind(entity)(tangon, michal);
            _closure1_slot15 = michal;
 79:
            return entity;
        }
    };
    var _closure1_slot17 = entity;
    entity = function() { // Original name: showReviewRequestModal
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 9;
            zuuluu = zuuluu[entity];
            entity = undefined;
            tangon = tangon.bind(entity)(zuuluu);
            zuuluu = tangon.getRootNavigationRef;
            verify = zuuluu.bind(tangon)();
            golfie = {};
            tangon = null;
            zuuluu = tangon != verify;
            if(!zuuluu) { _fun00006_ip = 56; continue _fun00005 }
 46:
            report = verify.isReady;
            zuuluu = report.bind(verify)();
 56:
            if(!zuuluu) { _fun00006_ip = 104; continue _fun00005 }
 59:
            oscard = _closure1_slot0;
            option = _closure1_slot2;
            report = 10;
            report = option[report];
            option = oscard.bind(entity)(report);
            oscard = option.coerceGuildsRoute;
            report = verify.getCurrentRoute;
            report = report.bind(verify)();
            report = oscard.bind(option)(report);
            zuuluu = tangon != report;
 104:
            golfie['isViewingChat'] = zuuluu;
            report = _closure1_slot0;
            oscard = _closure1_slot2;
            zuuluu = 11;
            zuuluu = oscard[zuuluu];
            report = report.bind(entity)(zuuluu);
            zuuluu = report.getKeyboardIsOpen;
            zuuluu = zuuluu.bind(report)();
            golfie['isKeyboardOpen'] = zuuluu;
            report = _closure1_slot9;
            zuuluu = report.getVoiceChannelId;
            zuuluu = zuuluu.bind(report)();
            zuuluu = tangon != zuuluu;
            golfie['isInVoice'] = zuuluu;
            zuuluu = golfie.isViewingChat;
            if(!zuuluu) { _fun00006_ip = 279; continue _fun00005 }
 176:
            zuuluu = golfie.isKeyboardOpen;
            if(zuuluu) { _fun00006_ip = 279; continue _fun00005 }
 185:
            zuuluu = golfie.isInVoice;
            if(zuuluu) { _fun00006_ip = 279; continue _fun00005 }
 194:
            tangon = _closure1_slot1;
            report = _closure1_slot2;
            zuuluu = 14;
            zuuluu = report[zuuluu];
            option = tangon.bind(entity)(zuuluu);
            oscard = option.track;
            zuuluu = _closure1_slot10;
            zuuluu = zuuluu.REVIEW_REQUEST_SHOW_ATTEMPTED;
            zuuluu = oscard.bind(option)(zuuluu);
            oscard = _closure1_slot13;
            zuuluu = 1;
            oscard['revision'] = zuuluu;
            zuuluu = _closure1_slot20;
            zuuluu = zuuluu.bind(entity)();
            zuuluu = 8;
            zuuluu = report[zuuluu];
            zuuluu = tangon.bind(entity)(zuuluu);
            zuuluu = zuuluu.bind(entity)();
            zuuluu = false;
            _closure1_slot14 = zuuluu;
            _fun00006_ip = 369; continue _fun00005;
 279:
            tangon = _closure1_slot1;
            report = _closure1_slot2;
            zuuluu = 14;
            zuuluu = report[zuuluu];
            oscard = tangon.bind(entity)(zuuluu);
            report = oscard.track;
            zuuluu = _closure1_slot10;
            tangon = zuuluu.REVIEW_REQUEST_DEFERRED;
            zuuluu = {};
            option = golfie.isKeyboardOpen;
            zuuluu['is_keyboard_open'] = option;
            option = golfie.isInVoice;
            zuuluu['is_in_voice'] = option;
            golfie = golfie.isViewingChat;
            zuuluu['is_viewing_chat'] = golfie;
            zuuluu = report.bind(oscard)(tangon, zuuluu);
            michal = _closure1_slot17;
            michal = michal.bind(entity)();
 369:
            return entity;
        }
    };
    var _closure1_slot18 = entity;
    verify = function() { // Original name: handleConnectionClosedOrInterrupted
        michal = _closure1_slot19;
        entity = undefined;
        michal = michal.bind(entity)();
        return entity;
    };
    entity = function() { // Original name: cancelExistingTimeout
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            zuuluu = _closure1_slot15;
            entity = -1;
            if(!(entity !== zuuluu)) { _fun00008_ip = 40; continue _fun00007 }
 17:
            zuuluu = global;
            report = zuuluu.clearTimeout;
            tangon = _closure1_slot15;
            zuuluu = undefined;
            zuuluu = report.bind(zuuluu)(tangon);
            _closure1_slot15 = entity;
 40:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot19 = entity;
    entity = function() { // Original name: writePersistedState
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot2;
        entity = 13;
        zuuluu = zuuluu[entity];
        entity = undefined;
        zuuluu = tangon.bind(entity)(zuuluu);
        report = zuuluu.Storage;
        tangon = report.set;
        zuuluu = _closure1_slot12;
        michal = _closure1_slot13;
        michal = tangon.bind(report)(zuuluu, michal);
        return entity;
    };
    var _closure1_slot20 = entity;
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
    michal = 1;
    michal = oscard[michal];
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
    michal = report.bind(entity)(michal);
    michal = michal.AnalyticEvents;
    var _closure1_slot10 = michal;
    michal = 'RequestReviewStore';
    var _closure1_slot12 = michal;
    option = {'revision': 0, 'firstUse': 0};
    var _closure1_slot13 = option;
    option = false;
    var _closure1_slot14 = option;
    option = -1;
    var _closure1_slot15 = option;
    option = 15;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    offset = option.Store;
    option = function(argFoo) {
        tangon = function() { // Original name: RequestReviewStore
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                tangon = this;
                zuuluu = undefined;
                report = undefined;
                entity = _closure1_slot3;
                michal = _closure2_slot0;
                entity = entity.bind(zuuluu)(tangon, michal);
                entity = _closure1_slot6;
                verify = entity.bind(zuuluu)(michal);
                michal = _closure1_slot5;
                entity = _closure1_slot16;
                entity = entity.bind(zuuluu)();
                if(entity) { _fun00010_ip = 69; continue _fun00009 }
 51:
                golfie = verify.apply;
                report = arguments;
                entity = report;
                entity = golfie.bind(verify)(tangon, entity);
                _fun00010_ip = 105; continue _fun00009;
 69:
                golfie = global;
                option = golfie.Reflect;
                golfie = option.construct;
                oscard = _closure1_slot6;
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
                tangon = this;
                report = _closure1_slot0;
                zuuluu = _closure1_slot2;
                entity = 13;
                zuuluu = zuuluu[entity];
                entity = undefined;
                zuuluu = report.bind(entity)(zuuluu);
                oscard = zuuluu.Storage;
                report = oscard.get;
                zuuluu = _closure1_slot12;
                zuuluu = report.bind(oscard)(zuuluu);
                report = null;
                if(!(report == zuuluu)) { _fun00012_ip = 68; continue _fun00011 }
 54:
                zuuluu = {'firstUse': 0, 'revision': 0};
 68:
                _closure1_slot13 = zuuluu;
                zuuluu = tangon.waitFor;
                michal = _closure1_slot8;
                michal = zuuluu.bind(tangon)(michal);
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
    michal = 16;
    michal = oscard[michal];
    foxtra = golfie.bind(entity)(michal);
    michal = {};
    offset = function(argFoo) { // Original name: handleConnectionOpen
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            entity = argFoo;
            michal = entity.user;
            oscard = entity.guilds;
            zuuluu = _closure1_slot13;
            tangon = zuuluu.firstUse;
            zuuluu = 0;
            if(!(zuuluu === tangon)) { _fun00014_ip = 70; continue _fun00013 }
 33:
            tangon = _closure1_slot13;
            zuuluu = global;
            report = zuuluu.Date;
            zuuluu = report.now;
            zuuluu = zuuluu.bind(report)();
            tangon['firstUse'] = zuuluu;
            tangon = _closure1_slot20;
            zuuluu = undefined;
            zuuluu = tangon.bind(zuuluu)();
 70:
            zuuluu = {};
            tangon = _closure1_slot13;
            report = tangon.firstUse;
            tangon = global;
            golfie = tangon.Date;
            tangon = golfie.now;
            golfie = tangon.bind(golfie)();
            tangon = 864000000;
            tangon = golfie - tangon;
            tangon = report < tangon;
            zuuluu['isInstallOldEnough'] = tangon;
            report = oscard.some;
            tangon = function(argFoo) {
                entity = argFoo;
                michal = entity.member_count;
                entity = 5;
                entity = michal >= entity;
                return entity;
            };
            tangon = report.bind(oscard)(tangon);
            zuuluu['isInLargeEnoughGuild'] = tangon;
            michal = michal.verified;
            golfie = true;
            michal = golfie === michal;
            zuuluu['isAccountVerified'] = michal;
            michal = _closure1_slot13;
            tangon = michal.revision;
            michal = 1;
            michal = tangon < michal;
            zuuluu['isNewRevision'] = michal;
            michal = zuuluu.isNewRevision;
            if(!michal) { _fun00014_ip = 282; continue _fun00013 }
 191:
            report = _closure1_slot1;
            tangon = _closure1_slot2;
            michal = 14;
            tangon = tangon[michal];
            michal = undefined;
            oscard = report.bind(michal)(tangon);
            report = oscard.track;
            michal = _closure1_slot10;
            tangon = michal.REVIEW_REQUEST_ELIGIBILITY_CHECKED;
            michal = {};
            michal['is_hfu'] = golfie;
            golfie = zuuluu.isInstallOldEnough;
            michal['is_install_old_enough'] = golfie;
            golfie = zuuluu.isInLargeEnoughGuild;
            michal['is_in_large_enough_guild'] = golfie;
            golfie = zuuluu.isAccountVerified;
            michal['is_account_verified'] = golfie;
            michal = report.bind(oscard)(tangon, michal);
 282:
            michal = zuuluu.isInstallOldEnough;
            if(!michal) { _fun00014_ip = 297; continue _fun00013 }
 291:
            michal = zuuluu.isAccountVerified;
 297:
            if(!michal) { _fun00014_ip = 306; continue _fun00013 }
 300:
            michal = zuuluu.isInLargeEnoughGuild;
 306:
            if(!michal) { _fun00014_ip = 315; continue _fun00013 }
 309:
            michal = zuuluu.isNewRevision;
 315:
            _closure1_slot14 = michal;
            michal = _closure1_slot17;
            entity = undefined;
            michal = michal.bind(entity)();
            return entity;
        }
    };
    michal['CONNECTION_OPEN'] = offset;
    offset = function() { // Original name: handleConnectionResumed
        michal = _closure1_slot17;
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
        var _closure1_slot11 = michal;
        michal = _closure1_slot17;
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
            entity = 12;
            zuuluu = zuuluu[entity];
            entity = undefined;
            zuuluu = report.bind(entity)(zuuluu);
            zuuluu = zuuluu.AppStates;
            zuuluu = zuuluu.ACTIVE;
            if(!(tangon !== zuuluu)) { _fun00016_ip = 59; continue _fun00015 }
 49:
            zuuluu = _closure1_slot19;
            zuuluu = zuuluu.bind(entity)();
            _fun00016_ip = 67; continue _fun00015;
 59:
            michal = _closure1_slot17;
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
    tangon = 17;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/feedback/native/RequestReviewStore.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();