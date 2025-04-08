// app/modules/media/native/MediaPlayerManager.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    golfie = argBar;
    verify = argBaz;
    zuuluu = argFre;
    option = argPlu;
    var _closure1_slot0 = golfie;
    var _closure1_slot1 = verify;
    var _closure1_slot2 = option;
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
            _closure1_slot20 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot20 = entity;
    michal = function(argFoo) { // Original name: isPlaybackComplete
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.duration;
            michal = 0;
            if(!(!(zuuluu <= michal))) { _fun00004_ip = 42; continue _fun00003 }
 14:
            michal = entity.duration;
            entity = entity.time;
            michal = michal - entity;
            entity = _closure1_slot16;
            entity = michal <= entity;
            return entity;
 42:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot21 = michal;
    entity = global;
    offset = entity.Object;
    oscard = offset.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = oscard.bind(offset)(zuuluu, entity, tangon);
    entity = 0;
    tangon = option[entity];
    entity = undefined;
    tangon = verify.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = option[tangon];
    tangon = verify.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = option[tangon];
    tangon = verify.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = option[tangon];
    tangon = verify.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = option[tangon];
    tangon = verify.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 5;
    tangon = option[tangon];
    tangon = golfie.bind(entity)(tangon);
    oscard = tangon.NativeEventEmitter;
    var _closure1_slot8 = oscard;
    tangon = tangon.NativeModules;
    var _closure1_slot9 = tangon;
    tangon = 6;
    tangon = option[tangon];
    tangon = verify.bind(entity)(tangon);
    var _closure1_slot10 = tangon;
    tangon = 7;
    tangon = option[tangon];
    tangon = verify.bind(entity)(tangon);
    var _closure1_slot11 = tangon;
    tangon = 8;
    tangon = option[tangon];
    tangon = verify.bind(entity)(tangon);
    var _closure1_slot12 = tangon;
    tangon = 9;
    tangon = option[tangon];
    tangon = verify.bind(entity)(tangon);
    var _closure1_slot13 = tangon;
    tangon = 10;
    tangon = option[tangon];
    tangon = verify.bind(entity)(tangon);
    var _closure1_slot14 = tangon;
    tangon = 11;
    tangon = option[tangon];
    tangon = golfie.bind(entity)(tangon);
    tangon = tangon.ActivityPanelModes;
    var _closure1_slot15 = tangon;
    tangon = 12;
    tangon = option[tangon];
    tangon = golfie.bind(entity)(tangon);
    tangon = tangon.PLAYBACK_COMPLETION_DETECTION_TOLERANCE;
    var _closure1_slot16 = tangon;
    tangon = 13;
    tangon = option[tangon];
    tangon = golfie.bind(entity)(tangon);
    tangon = tangon.Permissions;
    var _closure1_slot17 = tangon;
    tangon = 14;
    tangon = option[tangon];
    offset = verify.bind(entity)(tangon);
    tangon = offset.prototype;
    oscard = Object.create(tangon, {constructor: {value: offset}});
    foxtra = 'MediaPlayerManager';
    backup = oscard;
    tangon = new backup[offset](foxtra, romeon);
    tangon = tangon instanceof Object ? tangon : oscard;
    var _closure1_slot18 = tangon;
    tangon = 15;
    tangon = option[tangon];
    offset = golfie.bind(entity)(tangon);
    oscard = offset.create;
    tangon = function(argFoo) {
        entity = argFoo;
        var _closure2_slot0 = entity;
        entity = {'activeMediaPlayerSource': null, 'mediaSourceMessage': null, 'canAccessMedia': true, 'isPlaying': false, 'wasPipClosedByUser': false, 'progress': null, 'rate': 0, 'showPip': false};
        michal = undefined;
        entity['activeMediaPlayerSource'] = michal;
        entity['mediaSourceMessage'] = michal;
        entity['progress'] = michal;
        zuuluu = function() { // Original name: closePip
            zuuluu = _closure1_slot0;
            michal = _closure1_slot2;
            entity = 16;
            michal = michal[entity];
            entity = undefined;
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.batchUpdates;
            michal = function() {
                zuuluu = _closure2_slot0;
                michal = {};
                entity = false;
                michal['showPip'] = entity;
                entity = undefined;
                entity = zuuluu.bind(entity)(michal);
                return entity;
            };
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        };
        entity['closePip'] = zuuluu;
        zuuluu = {};
        entity['displayedMediaItemIdsPerChannel'] = zuuluu;
        entity['currentlyDisplayedChannelId'] = michal;
        return entity;
    };
    tangon = oscard.bind(offset)(tangon);
    var _closure1_slot19 = tangon;
    oscard = 21;
    oscard = option[oscard];
    oscard = verify.bind(entity)(oscard);
    report = function(argFoo) {
        tangon = function() { // Original name: MediaPlayerManager
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                tangon = this;
                entity = _closure1_slot3;
                zuuluu = _closure2_slot0;
                michal = undefined;
                entity = entity.bind(michal)(tangon, zuuluu);
                entity = _closure1_slot6;
                verify = entity.bind(michal)(zuuluu);
                zuuluu = _closure1_slot5;
                entity = _closure1_slot20;
                entity = entity.bind(michal)();
                if(entity) { _fun00006_ip = 62; continue _fun00005 }
 49:
                entity = verify.apply;
                entity = entity.bind(verify)(tangon, michal);
                _fun00006_ip = 100; continue _fun00005;
 62:
                oscard = global;
                option = oscard.Reflect;
                golfie = option.construct;
                report = _closure1_slot6;
                report = report.bind(michal)(tangon);
                oscard = report.constructor;
                report = new Array(0);
                entity = golfie.bind(option)(verify, report, oscard);
 100:
                entity = zuuluu.bind(michal)(tangon, entity);
                zuuluu = new Array(0);
                entity['subscriptions'] = zuuluu;
                entity['voicePanelStoreUnsubscribe'] = michal;
                zuuluu = entity.pauseAndClosePip;
                michal = zuuluu.bind;
                michal = michal.bind(zuuluu)(entity);
                entity['pauseAndClosePip'] = michal;
                zuuluu = entity.handleVoicePanelStateUpdated;
                michal = zuuluu.bind;
                michal = michal.bind(zuuluu)(entity);
                entity['handleVoicePanelStateUpdated'] = michal;
                zuuluu = entity.handleEmbeddedActivitiesUpdated;
                michal = zuuluu.bind;
                michal = michal.bind(zuuluu)(entity);
                entity['handleEmbeddedActivitiesUpdated'] = michal;
                zuuluu = entity.handleMediaPlayerPlaybackRateChanged;
                michal = zuuluu.bind;
                michal = michal.bind(zuuluu)(entity);
                entity['handleMediaPlayerPlaybackRateChanged'] = michal;
                zuuluu = entity.handleMediaPlayerPlaybackSourceChanged;
                michal = zuuluu.bind;
                michal = michal.bind(zuuluu)(entity);
                entity['handleMediaPlayerPlaybackSourceChanged'] = michal;
                zuuluu = entity.handleMediaPlayerViewWillAppear;
                michal = zuuluu.bind;
                michal = michal.bind(zuuluu)(entity);
                entity['handleMediaPlayerViewWillAppear'] = michal;
                zuuluu = entity.handleMediaPlayerViewDidDisappear;
                michal = zuuluu.bind;
                michal = michal.bind(zuuluu)(entity);
                entity['handleMediaPlayerViewDidDisappear'] = michal;
                zuuluu = entity.updateDisplayState;
                michal = zuuluu.bind;
                michal = michal.bind(zuuluu)(entity);
                entity['updateDisplayState'] = michal;
                zuuluu = entity.updateMediaPermissions;
                michal = zuuluu.bind;
                michal = michal.bind(zuuluu)(entity);
                entity['updateMediaPermissions'] = michal;
                return entity;
            }
        };
        var _closure2_slot0 = tangon;
        report = _closure1_slot7;
        zuuluu = undefined;
        michal = argFoo;
        michal = report.bind(zuuluu)(tangon, michal);
        michal = _closure1_slot4;
        report = {};
        entity = '_initialize';
        report['key'] = entity;
        entity = function() { // Original name: value
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                zuuluu = this;
                oscard = _closure1_slot8;
                entity = _closure1_slot9;
                offset = entity.MediaPlayerManager;
                report = oscard.prototype;
                report = Object.create(report, {constructor: {value: oscard}});
                yankee = report;
                tangon = new yankee[oscard](offset, verify);
                option = tangon instanceof Object ? tangon : report;
                oscard = option.addListener;
                report = zuuluu.handleMediaPlayerPlaybackSourceChanged;
                tangon = 'MediaPlayerPlaybackSourceChanged';
                report = oscard.bind(option)(tangon, report);
                tangon = new Array(5);
                tangon[0] = report;
                golfie = option.addListener;
                oscard = zuuluu.handleMediaPlayerPlaybackProgressUpdated;
                report = 'MediaPlayerPlaybackProgressUpdated';
                report = golfie.bind(option)(report, oscard);
                tangon[1] = report;
                golfie = option.addListener;
                oscard = zuuluu.handleMediaPlayerPlaybackRateChanged;
                report = 'MediaPlayerPlaybackRateChanged';
                report = golfie.bind(option)(report, oscard);
                tangon[2] = report;
                golfie = option.addListener;
                oscard = zuuluu.handleMediaPlayerViewWillAppear;
                report = 'MediaPlayerViewWillAppear';
                report = golfie.bind(option)(report, oscard);
                tangon[3] = report;
                golfie = option.addListener;
                oscard = zuuluu.handleMediaPlayerViewDidDisappear;
                report = 'MediaPlayerViewDidDisappear';
                report = golfie.bind(option)(report, oscard);
                tangon[4] = report;
                zuuluu['subscriptions'] = tangon;
                tangon = entity.MediaPlayerManager;
                entity = tangon.subscribeToPlaybackEvents;
                entity = entity.bind(tangon)();
                report = _closure1_slot0;
                tangon = _closure1_slot2;
                entity = 17;
                tangon = tangon[entity];
                entity = undefined;
                report = report.bind(entity)(tangon);
                tangon = report.getRootNavigationRef;
                golfie = tangon.bind(report)();
                tangon = null;
                if(!(tangon != golfie)) { _fun00008_ip = 270; continue _fun00007 }
 248:
                oscard = golfie.addListener;
                report = zuuluu.updateDisplayState;
                tangon = 'state';
                tangon = oscard.bind(golfie)(tangon, report);
 270:
                oscard = _closure1_slot11;
                report = oscard.subscribe;
                tangon = zuuluu.handleVoicePanelStateUpdated;
                tangon = report.bind(oscard)(tangon);
                zuuluu['voicePanelStoreUnsubscribe'] = tangon;
                oscard = _closure1_slot10;
                report = oscard.addChangeListener;
                tangon = zuuluu.handleEmbeddedActivitiesUpdated;
                tangon = report.bind(oscard)(tangon);
                oscard = _closure1_slot12;
                report = oscard.addChangeListener;
                tangon = zuuluu.updateMediaPermissions;
                tangon = report.bind(oscard)(tangon);
                report = _closure1_slot14;
                tangon = report.addChangeListener;
                zuuluu = zuuluu.updateMediaPermissions;
                zuuluu = tangon.bind(report)(zuuluu);
                tangon = _closure1_slot18;
                zuuluu = tangon.verbose;
                michal = 'Initialized and subscribed to playback events';
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(17);
        entity[0] = report;
        report = {};
        golfie = 'updateMediaPermissions';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = this;
            var _closure3_slot0 = entity;
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 16;
            zuuluu = zuuluu[entity];
            entity = undefined;
            tangon = tangon.bind(entity)(zuuluu);
            zuuluu = tangon.batchUpdates;
            michal = function() {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    zuuluu = _closure1_slot19;
                    entity = zuuluu.getState;
                    entity = entity.bind(zuuluu)();
                    tangon = entity.activeMediaPlayerSource;
                    oscard = _closure1_slot12;
                    report = oscard.getChannel;
                    zuuluu = null;
                    option = zuuluu == tangon;
                    entity = undefined;
                    golfie = undefined;
                    if(option) { _fun00010_ip = 50; continue _fun00009 }
 45:
                    golfie = tangon.channelId;
 50:
                    option = zuuluu != golfie;
                    tangon = null;
                    if(!option) { _fun00010_ip = 62; continue _fun00009 }
 59:
                    tangon = golfie;
 62:
                    oscard = report.bind(oscard)(tangon);
                    if(!(zuuluu != oscard)) { _fun00010_ip = 156; continue _fun00009 }
 71:
                    zuuluu = oscard.isPrivate;
                    zuuluu = zuuluu.bind(oscard)();
                    if(zuuluu) { _fun00010_ip = 156; continue _fun00009 }
 84:
                    report = _closure1_slot14;
                    tangon = report.can;
                    zuuluu = _closure1_slot17;
                    zuuluu = zuuluu.VIEW_CHANNEL;
                    zuuluu = tangon.bind(report)(zuuluu, oscard);
                    if(zuuluu) { _fun00010_ip = 156; continue _fun00009 }
 113:
                    report = _closure1_slot19;
                    tangon = report.setState;
                    zuuluu = {};
                    oscard = false;
                    zuuluu['canAccessMedia'] = oscard;
                    zuuluu = tangon.bind(report)(zuuluu);
                    tangon = _closure3_slot0;
                    zuuluu = tangon.pauseCurrentPlayer;
                    zuuluu = zuuluu.bind(tangon)();
                    _fun00010_ip = 180; continue _fun00009;
 156:
                    tangon = _closure1_slot19;
                    zuuluu = tangon.setState;
                    michal = {};
                    report = true;
                    michal['canAccessMedia'] = report;
                    michal = zuuluu.bind(tangon)(michal);
 180:
                    return entity;
                }
            };
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        };
        report['value'] = golfie;
        entity[1] = report;
        report = {};
        golfie = '_terminate';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                michal = this;
                tangon = michal.subscriptions;
                zuuluu = tangon.forEach;
                entity = function(argFoo) {
                    michal = argFoo;
                    entity = michal.remove;
                    entity = entity.bind(michal)();
                    return entity;
                };
                entity = zuuluu.bind(tangon)(entity);
                entity = new Array(0);
                michal['subscriptions'] = entity;
                report = _closure1_slot0;
                tangon = _closure1_slot2;
                entity = 17;
                tangon = tangon[entity];
                entity = undefined;
                report = report.bind(entity)(tangon);
                tangon = report.getRootNavigationRef;
                option = tangon.bind(report)();
                tangon = null;
                if(!(tangon != option)) { _fun00012_ip = 101; continue _fun00011 }
 79:
                golfie = option.removeListener;
                oscard = michal.updateDisplayState;
                report = 'state';
                report = golfie.bind(option)(report, oscard);
 101:
                report = michal.voicePanelStoreUnsubscribe;
                if(!(tangon != report)) { _fun00012_ip = 121; continue _fun00011 }
 111:
                tangon = report.call;
                tangon = tangon.bind(report)(michal);
 121:
                oscard = _closure1_slot10;
                report = oscard.removeChangeListener;
                tangon = michal.handleEmbeddedActivitiesUpdated;
                tangon = report.bind(oscard)(tangon);
                oscard = _closure1_slot12;
                report = oscard.removeChangeListener;
                tangon = michal.updateMediaPermissions;
                tangon = report.bind(oscard)(tangon);
                tangon = _closure1_slot14;
                zuuluu = tangon.removeChangeListener;
                michal = michal.updateMediaPermissions;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            }
        };
        report['value'] = golfie;
        entity[2] = report;
        report = {};
        golfie = 'pauseCurrentPlayer';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = _closure1_slot9;
            michal = entity.MediaPlayerManager;
            entity = michal.pauseCurrentPlayer;
            entity = entity.bind(michal)();
            entity = undefined;
            return entity;
        };
        report['value'] = golfie;
        entity[3] = report;
        report = {};
        golfie = 'playCurrentPlayer';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = _closure1_slot9;
            michal = entity.MediaPlayerManager;
            entity = michal.playCurrentPlayer;
            entity = entity.bind(michal)();
            entity = undefined;
            return entity;
        };
        report['value'] = golfie;
        entity[4] = report;
        report = {};
        golfie = 'userDidClosePip';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            zuuluu = _closure1_slot0;
            michal = _closure1_slot2;
            entity = 16;
            michal = michal[entity];
            entity = undefined;
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.batchUpdates;
            michal = function() {
                zuuluu = _closure1_slot19;
                michal = zuuluu.setState;
                entity = {'wasPipClosedByUser': true, 'showPip': false};
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        };
        report['value'] = golfie;
        entity[5] = report;
        report = {};
        golfie = 'pauseAndClosePip';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = this;
            var _closure3_slot0 = entity;
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 16;
            zuuluu = zuuluu[entity];
            entity = undefined;
            tangon = tangon.bind(entity)(zuuluu);
            zuuluu = tangon.batchUpdates;
            michal = function() {
                michal = _closure3_slot0;
                entity = michal.pauseCurrentPlayer;
                entity = entity.bind(michal)();
                zuuluu = _closure1_slot19;
                michal = zuuluu.setState;
                entity = {'wasPipClosedByUser': true, 'showPip': false};
                entity = michal.bind(zuuluu)(entity);
                entity = undefined;
                return entity;
            };
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        };
        report['value'] = golfie;
        entity[6] = report;
        report = {};
        golfie = 'handleVoicePanelStateUpdated';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                michal = this;
                zuuluu = _closure1_slot11;
                entity = zuuluu.getState;
                zuuluu = entity.bind(zuuluu)();
                entity = zuuluu.isVoicePanelFullscreen;
                entity = entity.bind(zuuluu)();
                if(entity) { _fun00014_ip = 50; continue _fun00013 }
 33:
                zuuluu = zuuluu.voicePanelsPIP;
                tangon = zuuluu.size;
                zuuluu = 0;
                entity = tangon > zuuluu;
 50:
                if(!entity) { _fun00014_ip = 63; continue _fun00013 }
 53:
                entity = michal.pauseAndClosePip;
                entity = entity.bind(michal)();
 63:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = golfie;
        entity[7] = report;
        report = {};
        golfie = 'handleEmbeddedActivitiesUpdated';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                michal = this;
                tangon = _closure1_slot10;
                zuuluu = tangon.getActivityPanelMode;
                zuuluu = zuuluu.bind(tangon)();
                entity = _closure1_slot15;
                entity = entity.PIP;
                if(!(zuuluu === entity)) { _fun00016_ip = 44; continue _fun00015 }
 34:
                entity = michal.pauseAndClosePip;
                entity = entity.bind(michal)();
 44:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = golfie;
        entity[8] = report;
        report = {};
        golfie = 'handleMediaPlayerPlaybackRateChanged';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            entity = argFoo;
            zuuluu = this;
            var _closure3_slot0 = zuuluu;
            zuuluu = entity.source;
            var _closure3_slot1 = zuuluu;
            entity = entity.rate;
            var _closure3_slot2 = entity;
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 16;
            zuuluu = zuuluu[entity];
            entity = undefined;
            tangon = tangon.bind(entity)(zuuluu);
            zuuluu = tangon.batchUpdates;
            michal = function() {
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    entity = _closure3_slot1;
                    verify = null;
                    if(!(verify == entity)) { _fun00018_ip = 41; continue _fun00017 }
 13:
                    tangon = _closure1_slot19;
                    zuuluu = tangon.setState;
                    entity = {'rate': 0, 'isPlaying': false};
                    entity = zuuluu.bind(tangon)(entity);
 41:
                    oscard = _closure1_slot18;
                    report = oscard.verbose;
                    yankee = _closure3_slot2;
                    entity = _closure3_slot1;
                    tangon = verify == entity;
                    entity = undefined;
                    offset = undefined;
                    if(tangon) { _fun00018_ip = 82; continue _fun00017 }
 73:
                    tangon = _closure3_slot1;
                    offset = tangon.id;
 82:
                    tangon = global;
                    tangon = tangon.HermesInternal;
                    option = tangon.concat;
                    golfie = 'Playback rate changed to ';
                    tangon = ': ';
                    tangon = option.bind(golfie)(yankee, tangon, offset);
                    tangon = report.bind(oscard)(tangon);
                    report = _closure1_slot19;
                    tangon = report.getState;
                    tangon = tangon.bind(report)();
                    oscard = tangon.activeMediaPlayerSource;
                    option = tangon.isPlaying;
                    golfie = tangon.wasPipClosedByUser;
                    report = _closure1_slot1;
                    offset = _closure1_slot2;
                    tangon = 18;
                    tangon = offset[tangon];
                    report = report.bind(entity)(tangon);
                    tangon = _closure3_slot1;
                    verify = verify != tangon;
                    tangon = undefined;
                    if(!verify) { _fun00018_ip = 188; continue _fun00017 }
 184:
                    tangon = _closure3_slot1;
 188:
                    tangon = report.bind(entity)(oscard, tangon);
                    if(tangon) { _fun00018_ip = 252; continue _fun00017 }
 197:
                    oscard = _closure3_slot0;
                    report = oscard.handleMediaPlayerPlaybackSourceChanged;
                    tangon = {};
                    verify = _closure3_slot1;
                    tangon['source'] = verify;
                    tangon = report.bind(oscard)(tangon);
                    report = oscard.handleMediaPlayerPlaybackRateChanged;
                    tangon = {};
                    tangon['source'] = verify;
                    verify = _closure3_slot2;
                    tangon['rate'] = verify;
                    tangon = report.bind(oscard)(tangon);
                    tangon = undefined;
                    return tangon;
 252:
                    report = _closure1_slot19;
                    tangon = report.setState;
                    zuuluu = {};
                    oscard = _closure3_slot2;
                    zuuluu['rate'] = oscard;
                    verify = 0;
                    oscard = verify !== oscard;
                    zuuluu['isPlaying'] = oscard;
                    oscard = false;
                    option = oscard === option;
                    if(!option) { _fun00018_ip = 301; continue _fun00017 }
 293:
                    oscard = _closure3_slot2;
                    option = oscard > verify;
 301:
                    oscard = !option;
                    if(option) { _fun00018_ip = 310; continue _fun00017 }
 307:
                    oscard = golfie;
 310:
                    zuuluu['wasPipClosedByUser'] = oscard;
                    zuuluu = tangon.bind(report)(zuuluu);
                    zuuluu = _closure3_slot0;
                    michal = zuuluu.updateDisplayState;
                    michal = michal.bind(zuuluu)();
                    return entity;
                }
            };
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        };
        report['value'] = golfie;
        entity[9] = report;
        report = {};
        golfie = 'handleMediaPlayerPlaybackProgressUpdated';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            entity = argFoo;
            zuuluu = entity.source;
            var _closure3_slot0 = zuuluu;
            zuuluu = entity.time;
            var _closure3_slot1 = zuuluu;
            entity = entity.duration;
            var _closure3_slot2 = entity;
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 16;
            zuuluu = zuuluu[entity];
            entity = undefined;
            tangon = tangon.bind(entity)(zuuluu);
            zuuluu = tangon.batchUpdates;
            michal = function() {
                _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                    zuuluu = _closure1_slot19;
                    entity = zuuluu.getState;
                    zuuluu = entity.bind(zuuluu)();
                    report = _closure1_slot1;
                    tangon = _closure1_slot2;
                    entity = 18;
                    tangon = tangon[entity];
                    entity = undefined;
                    golfie = report.bind(entity)(tangon);
                    oscard = zuuluu.activeMediaPlayerSource;
                    zuuluu = _closure3_slot0;
                    report = null;
                    option = report != zuuluu;
                    zuuluu = undefined;
                    if(!option) { _fun00020_ip = 67; continue _fun00019 }
 63:
                    zuuluu = _closure3_slot0;
 67:
                    zuuluu = golfie.bind(entity)(oscard, zuuluu);
                    if(!zuuluu) { _fun00020_ip = 147; continue _fun00019 }
 76:
                    oscard = _closure3_slot2;
                    zuuluu = 0;
                    zuuluu = oscard > zuuluu;
                    oscard = null;
                    if(!zuuluu) { _fun00020_ip = 113; continue _fun00019 }
 91:
                    zuuluu = {};
                    golfie = _closure3_slot1;
                    zuuluu['time'] = golfie;
                    tangon = _closure3_slot2;
                    zuuluu['duration'] = tangon;
                    oscard = zuuluu;
 113:
                    tangon = _closure1_slot19;
                    zuuluu = tangon.setState;
                    michal = {};
                    golfie = report != oscard;
                    report = undefined;
                    if(!golfie) { _fun00020_ip = 137; continue _fun00019 }
 134:
                    report = oscard;
 137:
                    michal['progress'] = report;
                    michal = zuuluu.bind(tangon)(michal);
 147:
                    return entity;
                }
            };
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        };
        report['value'] = golfie;
        entity[10] = report;
        report = {};
        golfie = 'handleMediaPlayerPlaybackSourceChanged';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            entity = this;
            var _closure3_slot0 = entity;
            entity = argFoo;
            entity = entity.source;
            var _closure3_slot1 = entity;
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 16;
            zuuluu = zuuluu[entity];
            entity = undefined;
            tangon = tangon.bind(entity)(zuuluu);
            zuuluu = tangon.batchUpdates;
            michal = function() {
                _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                    michal = _closure1_slot19;
                    entity = michal.getState;
                    tangon = entity.bind(michal)();
                    option = _closure1_slot18;
                    oscard = option.verbose;
                    entity = _closure3_slot1;
                    golfie = null;
                    report = golfie == entity;
                    entity = undefined;
                    offset = undefined;
                    if(report) { _fun00022_ip = 56; continue _fun00021 }
 47:
                    report = _closure3_slot1;
                    offset = report.id;
 56:
                    report = global;
                    report = report.HermesInternal;
                    verify = report.concat;
                    report = 'Playback source changed: ';
                    report = verify.bind(report)(offset);
                    report = oscard.bind(option)(report);
                    oscard = _closure1_slot1;
                    option = _closure1_slot2;
                    report = 18;
                    report = option[report];
                    oscard = oscard.bind(entity)(report);
                    tangon = tangon.activeMediaPlayerSource;
                    option = golfie != tangon;
                    report = undefined;
                    if(!option) { _fun00022_ip = 123; continue _fun00021 }
 120:
                    report = tangon;
 123:
                    tangon = _closure3_slot1;
                    option = golfie != tangon;
                    tangon = undefined;
                    if(!option) { _fun00022_ip = 140; continue _fun00021 }
 136:
                    tangon = _closure3_slot1;
 140:
                    tangon = oscard.bind(entity)(report, tangon);
                    if(tangon) { _fun00022_ip = 274; continue _fun00021 }
 152:
                    report = _closure1_slot19;
                    tangon = report.setState;
                    zuuluu = {'activeMediaPlayerSource': null, 'mediaSourceMessage': null, 'progress': null, 'rate': 0, 'isPlaying': false, 'wasPipClosedByUser': false};
                    oscard = _closure3_slot1;
                    option = golfie != oscard;
                    oscard = undefined;
                    if(!option) { _fun00022_ip = 193; continue _fun00021 }
 189:
                    oscard = _closure3_slot1;
 193:
                    zuuluu['activeMediaPlayerSource'] = oscard;
                    oscard = _closure3_slot1;
                    golfie = golfie != oscard;
                    oscard = undefined;
                    if(!golfie) { _fun00022_ip = 233; continue _fun00021 }
 212:
                    verify = _closure3_slot0;
                    option = verify.getOrFetchMediaSourceMessage;
                    golfie = _closure3_slot1;
                    oscard = option.bind(verify)(golfie);
 233:
                    zuuluu['mediaSourceMessage'] = oscard;
                    zuuluu['progress'] = entity;
                    zuuluu = tangon.bind(report)(zuuluu);
                    zuuluu = _closure3_slot0;
                    michal = zuuluu.updateMediaPermissions;
                    michal = michal.bind(zuuluu)();
                    michal = zuuluu.updateDisplayState;
                    michal = michal.bind(zuuluu)();
 274:
                    return entity;
                }
            };
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        };
        report['value'] = golfie;
        entity[11] = report;
        report = {};
        golfie = 'getOrFetchMediaSourceMessage';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                entity = argFoo;
                zuuluu = this;
                var _closure3_slot0 = zuuluu;
                golfie = entity.channelId;
                oscard = entity.messageId;
                tangon = null;
                if(!(tangon != oscard)) { _fun00024_ip = 32; continue _fun00023 }
 28:
                if(!(tangon == golfie)) { _fun00024_ip = 36; continue _fun00023 }
 32:
                entity = undefined;
                return entity;
 36:
                report = _closure1_slot13;
                entity = report.getMessage;
                entity = entity.bind(report)(golfie, oscard);
                if(!(tangon == entity)) { _fun00024_ip = 119; continue _fun00023 }
 59:
                report = _closure1_slot1;
                tangon = _closure1_slot2;
                zuuluu = 19;
                tangon = tangon[zuuluu];
                zuuluu = undefined;
                report = report.bind(zuuluu)(tangon);
                tangon = report.fetchMessage;
                zuuluu = {};
                zuuluu['channelId'] = golfie;
                zuuluu['messageId'] = oscard;
                tangon = tangon.bind(report)(zuuluu);
                zuuluu = tangon.then;
                michal = function(argFoo) {
                    _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                        zuuluu = argFoo;
                        entity = null;
                        if(!(entity != zuuluu)) { _fun00026_ip = 29; continue _fun00025 }
 9:
                        michal = _closure3_slot0;
                        entity = michal.handleMediaSourceMessageUpdated;
                        entity = entity.bind(michal)(zuuluu);
 29:
                        entity = undefined;
                        return entity;
                    }
                };
                michal = zuuluu.bind(tangon)(michal);
 119:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[12] = report;
        report = {};
        golfie = 'handleMediaSourceMessageUpdated';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            entity = argFoo;
            var _closure3_slot0 = entity;
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 16;
            zuuluu = zuuluu[entity];
            entity = undefined;
            tangon = tangon.bind(entity)(zuuluu);
            zuuluu = tangon.batchUpdates;
            michal = function() {
                _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                    zuuluu = _closure1_slot19;
                    entity = zuuluu.getState;
                    entity = entity.bind(zuuluu)();
                    zuuluu = entity.activeMediaPlayerSource;
                    entity = null;
                    report = entity == zuuluu;
                    entity = undefined;
                    tangon = undefined;
                    if(report) { _fun00028_ip = 41; continue _fun00027 }
 36:
                    tangon = zuuluu.messageId;
 41:
                    zuuluu = _closure3_slot0;
                    zuuluu = zuuluu.id;
                    if(!(tangon === zuuluu)) { _fun00028_ip = 83; continue _fun00027 }
 57:
                    tangon = _closure1_slot19;
                    zuuluu = tangon.setState;
                    michal = {};
                    report = _closure3_slot0;
                    michal['mediaSourceMessage'] = report;
                    michal = zuuluu.bind(tangon)(michal);
 83:
                    return entity;
                }
            };
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        };
        report['value'] = golfie;
        entity[13] = report;
        report = {};
        golfie = 'handleMediaPlayerViewWillAppear';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            entity = argFoo;
            zuuluu = this;
            var _closure3_slot0 = zuuluu;
            zuuluu = entity.mediaItemIds;
            var _closure3_slot1 = zuuluu;
            entity = entity.channelId;
            var _closure3_slot2 = entity;
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 16;
            zuuluu = zuuluu[entity];
            entity = undefined;
            tangon = tangon.bind(entity)(zuuluu);
            zuuluu = tangon.batchUpdates;
            michal = function() {
                _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                    zuuluu = _closure1_slot19;
                    entity = zuuluu.getState;
                    entity = entity.bind(zuuluu)();
                    report = entity.displayedMediaItemIdsPerChannel;
                    zuuluu = _closure3_slot2;
                    golfie = report[zuuluu];
                    zuuluu = null;
                    if(!(zuuluu == golfie)) { _fun00030_ip = 44; continue _fun00029 }
 40:
                    golfie = new Array(0);
 44:
                    zuuluu = global;
                    oscard = zuuluu.Set;
                    zuuluu = new Array(0);
                    option = 0;
                    offset = zuuluu;
                    verify = golfie;
                    option = arraySpread(offset, verify, option);
                    verify = _closure3_slot1;
                    offset = zuuluu;
                    tangon = arraySpread(offset, verify, option);
                    tangon = oscard.prototype;
                    tangon = Object.create(tangon, {constructor: {value: oscard}});
                    yankee = tangon;
                    offset = zuuluu;
                    zuuluu = new yankee[oscard](offset, verify);
                    tangon = zuuluu instanceof Object ? zuuluu : tangon;
                    zuuluu = _closure3_slot2;
                    report[zuuluu] = tangon;
                    tangon = _closure1_slot19;
                    zuuluu = tangon.setState;
                    michal = {};
                    michal['displayedMediaItemIdsPerChannel'] = report;
                    michal = zuuluu.bind(tangon)(michal);
                    michal = _closure3_slot0;
                    entity = michal.updateDisplayState;
                    entity = entity.bind(michal)();
                    entity = undefined;
                    return entity;
                }
            };
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        };
        report['value'] = golfie;
        entity[14] = report;
        report = {};
        golfie = 'handleMediaPlayerViewDidDisappear';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            entity = argFoo;
            zuuluu = this;
            var _closure3_slot0 = zuuluu;
            zuuluu = entity.mediaItemIds;
            var _closure3_slot1 = zuuluu;
            entity = entity.channelId;
            var _closure3_slot2 = entity;
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 16;
            zuuluu = zuuluu[entity];
            entity = undefined;
            tangon = tangon.bind(entity)(zuuluu);
            zuuluu = tangon.batchUpdates;
            michal = function() {
                _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
                    zuuluu = _closure1_slot19;
                    entity = zuuluu.getState;
                    entity = entity.bind(zuuluu)();
                    report = entity.displayedMediaItemIdsPerChannel;
                    tangon = global;
                    golfie = tangon.Set;
                    zuuluu = _closure3_slot2;
                    zuuluu = report[zuuluu];
                    oscard = null;
                    if(!(oscard == zuuluu)) { _fun00032_ip = 74; continue _fun00031 }
 48:
                    tangon = tangon.Set;
                    oscard = tangon.prototype;
                    oscard = Object.create(oscard, {constructor: {value: tangon}});
                    romeon = oscard;
                    tangon = new romeon[tangon](yankee);
                    zuuluu = tangon instanceof Object ? tangon : oscard;
 74:
                    option = new Array(0);
                    oscard = 0;
                    yankee = option;
                    offset = zuuluu;
                    verify = 0;
                    zuuluu = arraySpread(yankee, offset, verify);
                    tangon = option.filter;
                    zuuluu = function(argFoo) {
                        zuuluu = _closure3_slot1;
                        michal = zuuluu.includes;
                        entity = argFoo;
                        entity = michal.bind(zuuluu)(entity);
                        entity = !entity;
                        return entity;
                    };
                    yankee = tangon.bind(option)(zuuluu);
                    tangon = golfie.prototype;
                    tangon = Object.create(tangon, {constructor: {value: golfie}});
                    romeon = tangon;
                    zuuluu = new romeon[golfie](yankee, offset);
                    tangon = zuuluu instanceof Object ? zuuluu : tangon;
                    zuuluu = tangon.size;
                    if(!(oscard !== zuuluu)) { _fun00032_ip = 150; continue _fun00031 }
 140:
                    zuuluu = _closure3_slot2;
                    report[zuuluu] = tangon;
                    _fun00032_ip = 158; continue _fun00031;
 150:
                    zuuluu = _closure3_slot2;
                    zuuluu = delete report[zuuluu];
 158:
                    tangon = _closure1_slot19;
                    zuuluu = tangon.setState;
                    michal = {};
                    michal['displayedMediaItemIdsPerChannel'] = report;
                    michal = zuuluu.bind(tangon)(michal);
                    michal = _closure3_slot0;
                    entity = michal.updateDisplayState;
                    entity = entity.bind(michal)();
                    entity = undefined;
                    return entity;
                }
            };
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        };
        report['value'] = golfie;
        entity[15] = report;
        report = {};
        golfie = 'updateDisplayState';
        report['key'] = golfie;
        oscard = function() { // Original name: value
            zuuluu = _closure1_slot0;
            michal = _closure1_slot2;
            entity = 16;
            michal = michal[entity];
            entity = undefined;
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.batchUpdates;
            michal = function() {
                _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
                    zuuluu = _closure1_slot19;
                    entity = zuuluu.getState;
                    report = entity.bind(zuuluu)();
                    oscard = report.displayedMediaItemIdsPerChannel;
                    tangon = report.currentlyDisplayedChannelId;
                    zuuluu = report.activeMediaPlayerSource;
                    entity = undefined;
                    if(!(entity === zuuluu)) { _fun00034_ip = 43; continue _fun00033 }
 41:
                    zuuluu = {};
 43:
                    yankee = zuuluu.id;
                    zuuluu = report.wasPipClosedByUser;
                    golfie = report.progress;
                    option = report.isPlaying;
                    if(zuuluu) { _fun00034_ip = 343; continue _fun00033 }
 72:
                    if(option) { _fun00034_ip = 99; continue _fun00033 }
 75:
                    zuuluu = null;
                    zuuluu = zuuluu != golfie;
                    if(!zuuluu) { _fun00034_ip = 96; continue _fun00033 }
 84:
                    report = _closure1_slot21;
                    report = report.bind(entity)(golfie);
                    zuuluu = !report;
 96:
                    option = zuuluu;
 99:
                    report = _closure1_slot0;
                    golfie = _closure1_slot2;
                    zuuluu = 20;
                    zuuluu = golfie[zuuluu];
                    report = report.bind(entity)(zuuluu);
                    zuuluu = report.getFocusedChannelId;
                    golfie = zuuluu.bind(report)();
                    zuuluu = null;
                    if(!(zuuluu != golfie)) { _fun00034_ip = 172; continue _fun00033 }
 135:
                    if(!(tangon !== golfie)) { _fun00034_ip = 172; continue _fun00033 }
 139:
                    offset = oscard;
                    for(tangon in offset)
 150:
                    {
 159:
                        foxtra = tangon;
                        if(foxtra === golfie) { _fun00034_ip = 150; continue _fun00033 }
 166:
                        foxtra = delete oscard[foxtra];
                        _fun00034_ip = 150; continue _fun00033;
                    }
 172:
                    if(!(zuuluu == yankee)) { _fun00034_ip = 213; continue _fun00033 }
 176:
                    verify = _closure1_slot19;
                    report = verify.setState;
                    tangon = {};
                    tangon['showPip'] = option;
                    tangon['currentlyDisplayedChannelId'] = golfie;
                    tangon['displayedMediaItemIdsPerChannel'] = oscard;
                    tangon = report.bind(verify)(tangon);
                    _fun00034_ip = 367; continue _fun00033;
 213:
                    if(!(zuuluu == golfie)) { _fun00034_ip = 251; continue _fun00033 }
 217:
                    verify = _closure1_slot19;
                    report = verify.setState;
                    tangon = {};
                    tangon['showPip'] = option;
                    tangon['currentlyDisplayedChannelId'] = golfie;
                    tangon['displayedMediaItemIdsPerChannel'] = oscard;
                    tangon = report.bind(verify)(tangon);
                    _fun00034_ip = 367; continue _fun00033;
 251:
                    offset = oscard[golfie];
                    if(!(zuuluu == offset)) { _fun00034_ip = 293; continue _fun00033 }
 259:
                    report = _closure1_slot19;
                    tangon = report.setState;
                    zuuluu = {};
                    zuuluu['showPip'] = option;
                    zuuluu['currentlyDisplayedChannelId'] = golfie;
                    zuuluu['displayedMediaItemIdsPerChannel'] = oscard;
                    zuuluu = tangon.bind(report)(zuuluu);
                    _fun00034_ip = 367; continue _fun00033;
 293:
                    report = _closure1_slot19;
                    tangon = report.setState;
                    zuuluu = {};
                    if(!option) { _fun00034_ip = 321; continue _fun00033 }
 308:
                    verify = offset.has;
                    verify = verify.bind(offset)(yankee);
                    option = !verify;
 321:
                    zuuluu['showPip'] = option;
                    zuuluu['currentlyDisplayedChannelId'] = golfie;
                    zuuluu['displayedMediaItemIdsPerChannel'] = oscard;
                    zuuluu = tangon.bind(report)(zuuluu);
                    _fun00034_ip = 367; continue _fun00033;
 343:
                    tangon = _closure1_slot19;
                    zuuluu = tangon.setState;
                    michal = {};
                    report = false;
                    michal['showPip'] = report;
                    michal = zuuluu.bind(tangon)(michal);
 367:
                    return entity;
                }
            };
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        };
        report['value'] = oscard;
        entity[16] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    report = report.bind(entity)(oscard);
    oscard = report.prototype;
    oscard = Object.create(oscard, {constructor: {value: report}});
    backup = oscard;
    report = new backup[report](foxtra);
    report = report instanceof Object ? report : oscard;
    oscard = 22;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'modules/media/native/MediaPlayerManager.tsx';
    oscard = golfie.bind(option)(oscard);
    zuuluu['default'] = report;
    zuuluu['useMediaPlayerManagerStore'] = tangon;
    zuuluu['isPlaybackComplete'] = michal;
    return entity;
})();