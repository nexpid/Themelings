// app/modules/media/native/MediaPlayerManager.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    golf = argBar;
    verify = argBaz;
    zulu = argFred;
    options = argPlugh;
    var _closure1_slot0 = golf;
    var _closure1_slot1 = verify;
    var _closure1_slot2 = options;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun110030: for(var _fun110030_ip = 0; ; ) switch(_fun110030_ip) {
 0:
            tango = argFoo;
            mike = _closure1_slot6;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot5;
            entity = _closure1_slot21;
            entity = entity.bind(zulu)();
            if(entity) { _fun110030_ip = 48; continue _fun110030 }
 35:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, zulu);
            _fun110030_ip = 86; continue _fun110030;
 48:
            oscar = global;
            options = oscar.Reflect;
            golf = options.construct;
            oscar = new Array(0);
            report = _closure1_slot6;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 86:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot20 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun110031: for(var _fun110031_ip = 0; ; ) switch(_fun110031_ip) {
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
            _fun110031_ip = 76; continue _fun110031;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot21 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot21 = entity;
    mike = function(argFoo) { // Original name: isPlaybackComplete
        _fun110034: for(var _fun110034_ip = 0; ; ) switch(_fun110034_ip) {
 0:
            entity = argFoo;
            zulu = entity.duration;
            mike = 0;
            if(!(!(zulu <= mike))) { _fun110034_ip = 42; continue _fun110034 }
 14:
            mike = entity.duration;
            entity = entity.time;
            mike = mike - entity;
            entity = _closure1_slot16;
            entity = mike <= entity;
            return entity;
 42:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot22 = mike;
    entity = global;
    offset = entity.Object;
    oscar = offset.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = oscar.bind(offset)(zulu, entity, tango);
    entity = 0;
    tango = options[entity];
    entity = undefined;
    tango = verify.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = options[tango];
    tango = verify.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = options[tango];
    tango = verify.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = options[tango];
    tango = verify.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 4;
    tango = options[tango];
    tango = verify.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 5;
    tango = options[tango];
    tango = golf.bind(entity)(tango);
    oscar = tango.NativeEventEmitter;
    var _closure1_slot8 = oscar;
    tango = tango.NativeModules;
    var _closure1_slot9 = tango;
    tango = 6;
    tango = options[tango];
    tango = verify.bind(entity)(tango);
    var _closure1_slot10 = tango;
    tango = 7;
    tango = options[tango];
    tango = verify.bind(entity)(tango);
    var _closure1_slot11 = tango;
    tango = 8;
    tango = options[tango];
    tango = verify.bind(entity)(tango);
    var _closure1_slot12 = tango;
    tango = 9;
    tango = options[tango];
    tango = verify.bind(entity)(tango);
    var _closure1_slot13 = tango;
    tango = 10;
    tango = options[tango];
    tango = verify.bind(entity)(tango);
    var _closure1_slot14 = tango;
    tango = 11;
    tango = options[tango];
    tango = golf.bind(entity)(tango);
    tango = tango.ActivityPanelModes;
    var _closure1_slot15 = tango;
    tango = 12;
    tango = options[tango];
    tango = golf.bind(entity)(tango);
    tango = tango.PLAYBACK_COMPLETION_DETECTION_TOLERANCE;
    var _closure1_slot16 = tango;
    tango = 13;
    tango = options[tango];
    tango = golf.bind(entity)(tango);
    tango = tango.Permissions;
    var _closure1_slot17 = tango;
    tango = 14;
    tango = options[tango];
    offset = verify.bind(entity)(tango);
    tango = offset.prototype;
    oscar = Object.create(tango, {constructor: {value: offset}});
    foxtrot = 'MediaPlayerManager';
    backup = oscar;
    tango = new backup[offset](foxtrot, romeo);
    tango = tango instanceof Object ? tango : oscar;
    var _closure1_slot18 = tango;
    tango = 15;
    tango = options[tango];
    offset = golf.bind(entity)(tango);
    oscar = offset.create;
    tango = function(argFoo) {
        entity = argFoo;
        var _closure2_slot0 = entity;
        entity = {'activeMediaPlayerSource': null, 'mediaSourceMessage': null, 'canAccessMedia': true, 'isPlaying': false, 'wasPipClosedByUser': false, 'progress': null, 'rate': 0, 'showPip': false};
        mike = undefined;
        entity['activeMediaPlayerSource'] = mike;
        entity['mediaSourceMessage'] = mike;
        entity['progress'] = mike;
        zulu = function() { // Original name: closePip
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            entity = 16;
            mike = mike[entity];
            entity = undefined;
            tango = zulu.bind(entity)(mike);
            zulu = tango.batchUpdates;
            mike = function() {
                zulu = _closure2_slot0;
                mike = {};
                entity = false;
                mike['showPip'] = entity;
                entity = undefined;
                entity = zulu.bind(entity)(mike);
                return entity;
            };
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        entity['closePip'] = zulu;
        zulu = {};
        entity['displayedMediaItemIdsPerChannel'] = zulu;
        entity['currentlyDisplayedChannelId'] = mike;
        return entity;
    };
    tango = oscar.bind(offset)(tango);
    var _closure1_slot19 = tango;
    oscar = 21;
    oscar = options[oscar];
    oscar = verify.bind(entity)(oscar);
    report = function(argFoo) {
        tango = function() { // Original name: MediaPlayerManager
            tango = this;
            report = _closure1_slot3;
            zulu = _closure2_slot0;
            mike = undefined;
            report = report.bind(mike)(tango, zulu);
            entity = _closure1_slot20;
            entity = entity.bind(mike)(tango, zulu);
            zulu = new Array(0);
            entity['subscriptions'] = zulu;
            entity['voicePanelStoreUnsubscribe'] = mike;
            zulu = entity.pauseAndClosePip;
            mike = zulu.bind;
            mike = mike.bind(zulu)(entity);
            entity['pauseAndClosePip'] = mike;
            zulu = entity.handleVoicePanelStateUpdated;
            mike = zulu.bind;
            mike = mike.bind(zulu)(entity);
            entity['handleVoicePanelStateUpdated'] = mike;
            zulu = entity.handleEmbeddedActivitiesUpdated;
            mike = zulu.bind;
            mike = mike.bind(zulu)(entity);
            entity['handleEmbeddedActivitiesUpdated'] = mike;
            zulu = entity.handleMediaPlayerPlaybackRateChanged;
            mike = zulu.bind;
            mike = mike.bind(zulu)(entity);
            entity['handleMediaPlayerPlaybackRateChanged'] = mike;
            zulu = entity.handleMediaPlayerPlaybackSourceChanged;
            mike = zulu.bind;
            mike = mike.bind(zulu)(entity);
            entity['handleMediaPlayerPlaybackSourceChanged'] = mike;
            zulu = entity.handleMediaPlayerViewWillAppear;
            mike = zulu.bind;
            mike = mike.bind(zulu)(entity);
            entity['handleMediaPlayerViewWillAppear'] = mike;
            zulu = entity.handleMediaPlayerViewDidDisappear;
            mike = zulu.bind;
            mike = mike.bind(zulu)(entity);
            entity['handleMediaPlayerViewDidDisappear'] = mike;
            zulu = entity.updateDisplayState;
            mike = zulu.bind;
            mike = mike.bind(zulu)(entity);
            entity['updateDisplayState'] = mike;
            zulu = entity.updateMediaPermissions;
            mike = zulu.bind;
            mike = mike.bind(zulu)(entity);
            entity['updateMediaPermissions'] = mike;
            return entity;
        };
        var _closure2_slot0 = tango;
        report = _closure1_slot7;
        zulu = undefined;
        mike = argFoo;
        mike = report.bind(zulu)(tango, mike);
        mike = _closure1_slot4;
        report = {};
        entity = '_initialize';
        report['key'] = entity;
        entity = function() { // Original name: value
            _fun110040: for(var _fun110040_ip = 0; ; ) switch(_fun110040_ip) {
 0:
                zulu = this;
                oscar = _closure1_slot8;
                entity = _closure1_slot9;
                offset = entity.MediaPlayerManager;
                report = oscar.prototype;
                report = Object.create(report, {constructor: {value: oscar}});
                yankee = report;
                tango = new yankee[oscar](offset, verify);
                options = tango instanceof Object ? tango : report;
                oscar = options.addListener;
                report = zulu.handleMediaPlayerPlaybackSourceChanged;
                tango = 'MediaPlayerPlaybackSourceChanged';
                report = oscar.bind(options)(tango, report);
                tango = new Array(5);
                tango[0] = report;
                golf = options.addListener;
                oscar = zulu.handleMediaPlayerPlaybackProgressUpdated;
                report = 'MediaPlayerPlaybackProgressUpdated';
                report = golf.bind(options)(report, oscar);
                tango[1] = report;
                golf = options.addListener;
                oscar = zulu.handleMediaPlayerPlaybackRateChanged;
                report = 'MediaPlayerPlaybackRateChanged';
                report = golf.bind(options)(report, oscar);
                tango[2] = report;
                golf = options.addListener;
                oscar = zulu.handleMediaPlayerViewWillAppear;
                report = 'MediaPlayerViewWillAppear';
                report = golf.bind(options)(report, oscar);
                tango[3] = report;
                golf = options.addListener;
                oscar = zulu.handleMediaPlayerViewDidDisappear;
                report = 'MediaPlayerViewDidDisappear';
                report = golf.bind(options)(report, oscar);
                tango[4] = report;
                zulu['subscriptions'] = tango;
                tango = entity.MediaPlayerManager;
                entity = tango.subscribeToPlaybackEvents;
                entity = entity.bind(tango)();
                report = _closure1_slot0;
                tango = _closure1_slot2;
                entity = 17;
                tango = tango[entity];
                entity = undefined;
                report = report.bind(entity)(tango);
                tango = report.getRootNavigationRef;
                golf = tango.bind(report)();
                tango = null;
                if(!(tango != golf)) { _fun110040_ip = 270; continue _fun110040 }
 248:
                oscar = golf.addListener;
                report = zulu.updateDisplayState;
                tango = 'state';
                tango = oscar.bind(golf)(tango, report);
 270:
                oscar = _closure1_slot11;
                report = oscar.subscribe;
                tango = zulu.handleVoicePanelStateUpdated;
                tango = report.bind(oscar)(tango);
                zulu['voicePanelStoreUnsubscribe'] = tango;
                oscar = _closure1_slot10;
                report = oscar.addChangeListener;
                tango = zulu.handleEmbeddedActivitiesUpdated;
                tango = report.bind(oscar)(tango);
                oscar = _closure1_slot12;
                report = oscar.addChangeListener;
                tango = zulu.updateMediaPermissions;
                tango = report.bind(oscar)(tango);
                report = _closure1_slot14;
                tango = report.addChangeListener;
                zulu = zulu.updateMediaPermissions;
                zulu = tango.bind(report)(zulu);
                tango = _closure1_slot18;
                zulu = tango.verbose;
                mike = 'Initialized and subscribed to playback events';
                mike = zulu.bind(tango)(mike);
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(17);
        entity[0] = report;
        report = {};
        golf = 'updateMediaPermissions';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = this;
            var _closure3_slot0 = entity;
            tango = _closure1_slot0;
            zulu = _closure1_slot2;
            entity = 16;
            zulu = zulu[entity];
            entity = undefined;
            tango = tango.bind(entity)(zulu);
            zulu = tango.batchUpdates;
            mike = function() {
                _fun110042: for(var _fun110042_ip = 0; ; ) switch(_fun110042_ip) {
 0:
                    zulu = _closure1_slot19;
                    entity = zulu.getState;
                    entity = entity.bind(zulu)();
                    tango = entity.activeMediaPlayerSource;
                    oscar = _closure1_slot12;
                    report = oscar.getChannel;
                    zulu = null;
                    options = zulu == tango;
                    entity = undefined;
                    golf = undefined;
                    if(options) { _fun110042_ip = 50; continue _fun110042 }
 45:
                    golf = tango.channelId;
 50:
                    options = zulu != golf;
                    tango = null;
                    if(!options) { _fun110042_ip = 62; continue _fun110042 }
 59:
                    tango = golf;
 62:
                    oscar = report.bind(oscar)(tango);
                    if(!(zulu != oscar)) { _fun110042_ip = 156; continue _fun110042 }
 71:
                    zulu = oscar.isPrivate;
                    zulu = zulu.bind(oscar)();
                    if(zulu) { _fun110042_ip = 156; continue _fun110042 }
 84:
                    report = _closure1_slot14;
                    tango = report.can;
                    zulu = _closure1_slot17;
                    zulu = zulu.VIEW_CHANNEL;
                    zulu = tango.bind(report)(zulu, oscar);
                    if(zulu) { _fun110042_ip = 156; continue _fun110042 }
 113:
                    report = _closure1_slot19;
                    tango = report.setState;
                    zulu = {};
                    oscar = false;
                    zulu['canAccessMedia'] = oscar;
                    zulu = tango.bind(report)(zulu);
                    tango = _closure3_slot0;
                    zulu = tango.pauseCurrentPlayer;
                    zulu = zulu.bind(tango)();
                    _fun110042_ip = 180; continue _fun110042;
 156:
                    tango = _closure1_slot19;
                    zulu = tango.setState;
                    mike = {};
                    report = true;
                    mike['canAccessMedia'] = report;
                    mike = zulu.bind(tango)(mike);
 180:
                    return entity;
                }
            };
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = '_terminate';
        report['key'] = golf;
        golf = function() { // Original name: value
            _fun110043: for(var _fun110043_ip = 0; ; ) switch(_fun110043_ip) {
 0:
                mike = this;
                tango = mike.subscriptions;
                zulu = tango.forEach;
                entity = function(argFoo) {
                    mike = argFoo;
                    entity = mike.remove;
                    entity = entity.bind(mike)();
                    return entity;
                };
                entity = zulu.bind(tango)(entity);
                entity = new Array(0);
                mike['subscriptions'] = entity;
                report = _closure1_slot0;
                tango = _closure1_slot2;
                entity = 17;
                tango = tango[entity];
                entity = undefined;
                report = report.bind(entity)(tango);
                tango = report.getRootNavigationRef;
                options = tango.bind(report)();
                tango = null;
                if(!(tango != options)) { _fun110043_ip = 101; continue _fun110043 }
 79:
                golf = options.removeListener;
                oscar = mike.updateDisplayState;
                report = 'state';
                report = golf.bind(options)(report, oscar);
 101:
                report = mike.voicePanelStoreUnsubscribe;
                if(!(tango != report)) { _fun110043_ip = 121; continue _fun110043 }
 111:
                tango = report.call;
                tango = tango.bind(report)(mike);
 121:
                oscar = _closure1_slot10;
                report = oscar.removeChangeListener;
                tango = mike.handleEmbeddedActivitiesUpdated;
                tango = report.bind(oscar)(tango);
                oscar = _closure1_slot12;
                report = oscar.removeChangeListener;
                tango = mike.updateMediaPermissions;
                tango = report.bind(oscar)(tango);
                tango = _closure1_slot14;
                zulu = tango.removeChangeListener;
                mike = mike.updateMediaPermissions;
                mike = zulu.bind(tango)(mike);
                return entity;
            }
        };
        report['value'] = golf;
        entity[2] = report;
        report = {};
        golf = 'pauseCurrentPlayer';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = _closure1_slot9;
            mike = entity.MediaPlayerManager;
            entity = mike.pauseCurrentPlayer;
            entity = entity.bind(mike)();
            entity = undefined;
            return entity;
        };
        report['value'] = golf;
        entity[3] = report;
        report = {};
        golf = 'playCurrentPlayer';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = _closure1_slot9;
            mike = entity.MediaPlayerManager;
            entity = mike.playCurrentPlayer;
            entity = entity.bind(mike)();
            entity = undefined;
            return entity;
        };
        report['value'] = golf;
        entity[4] = report;
        report = {};
        golf = 'userDidClosePip';
        report['key'] = golf;
        golf = function() { // Original name: value
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            entity = 16;
            mike = mike[entity];
            entity = undefined;
            tango = zulu.bind(entity)(mike);
            zulu = tango.batchUpdates;
            mike = function() {
                zulu = _closure1_slot19;
                mike = zulu.setState;
                entity = {'wasPipClosedByUser': true, 'showPip': false};
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        report['value'] = golf;
        entity[5] = report;
        report = {};
        golf = 'pauseAndClosePip';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = this;
            var _closure3_slot0 = entity;
            tango = _closure1_slot0;
            zulu = _closure1_slot2;
            entity = 16;
            zulu = zulu[entity];
            entity = undefined;
            tango = tango.bind(entity)(zulu);
            zulu = tango.batchUpdates;
            mike = function() {
                mike = _closure3_slot0;
                entity = mike.pauseCurrentPlayer;
                entity = entity.bind(mike)();
                zulu = _closure1_slot19;
                mike = zulu.setState;
                entity = {'wasPipClosedByUser': true, 'showPip': false};
                entity = mike.bind(zulu)(entity);
                entity = undefined;
                return entity;
            };
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        report['value'] = golf;
        entity[6] = report;
        report = {};
        golf = 'handleVoicePanelStateUpdated';
        report['key'] = golf;
        golf = function() { // Original name: value
            _fun110051: for(var _fun110051_ip = 0; ; ) switch(_fun110051_ip) {
 0:
                mike = this;
                zulu = _closure1_slot11;
                entity = zulu.getState;
                zulu = entity.bind(zulu)();
                entity = zulu.isVoicePanelFullscreen;
                entity = entity.bind(zulu)();
                if(entity) { _fun110051_ip = 50; continue _fun110051 }
 33:
                zulu = zulu.voicePanelsPIP;
                tango = zulu.size;
                zulu = 0;
                entity = tango > zulu;
 50:
                if(!entity) { _fun110051_ip = 63; continue _fun110051 }
 53:
                entity = mike.pauseAndClosePip;
                entity = entity.bind(mike)();
 63:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = golf;
        entity[7] = report;
        report = {};
        golf = 'handleEmbeddedActivitiesUpdated';
        report['key'] = golf;
        golf = function() { // Original name: value
            _fun110052: for(var _fun110052_ip = 0; ; ) switch(_fun110052_ip) {
 0:
                mike = this;
                tango = _closure1_slot10;
                zulu = tango.getActivityPanelMode;
                zulu = zulu.bind(tango)();
                entity = _closure1_slot15;
                entity = entity.PIP;
                if(!(zulu === entity)) { _fun110052_ip = 44; continue _fun110052 }
 34:
                entity = mike.pauseAndClosePip;
                entity = entity.bind(mike)();
 44:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = golf;
        entity[8] = report;
        report = {};
        golf = 'handleMediaPlayerPlaybackRateChanged';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            entity = argFoo;
            zulu = this;
            var _closure3_slot0 = zulu;
            zulu = entity.source;
            var _closure3_slot1 = zulu;
            entity = entity.rate;
            var _closure3_slot2 = entity;
            tango = _closure1_slot0;
            zulu = _closure1_slot2;
            entity = 16;
            zulu = zulu[entity];
            entity = undefined;
            tango = tango.bind(entity)(zulu);
            zulu = tango.batchUpdates;
            mike = function() {
                _fun110054: for(var _fun110054_ip = 0; ; ) switch(_fun110054_ip) {
 0:
                    entity = _closure3_slot1;
                    verify = null;
                    if(!(verify == entity)) { _fun110054_ip = 45; continue _fun110054 }
 13:
                    tango = _closure1_slot19;
                    zulu = tango.setState;
                    entity = {'rate': 0, 'isPlaying': false};
                    entity = zulu.bind(tango)(entity);
 45:
                    oscar = _closure1_slot18;
                    report = oscar.verbose;
                    yankee = _closure3_slot2;
                    entity = _closure3_slot1;
                    tango = verify == entity;
                    entity = undefined;
                    offset = undefined;
                    if(tango) { _fun110054_ip = 86; continue _fun110054 }
 77:
                    tango = _closure3_slot1;
                    offset = tango.id;
 86:
                    tango = global;
                    tango = tango.HermesInternal;
                    options = tango.concat;
                    golf = 'Playback rate changed to ';
                    tango = ': ';
                    tango = options.bind(golf)(yankee, tango, offset);
                    tango = report.bind(oscar)(tango);
                    report = _closure1_slot19;
                    tango = report.getState;
                    tango = tango.bind(report)();
                    oscar = tango.activeMediaPlayerSource;
                    options = tango.isPlaying;
                    golf = tango.wasPipClosedByUser;
                    report = _closure1_slot1;
                    offset = _closure1_slot2;
                    tango = 18;
                    tango = offset[tango];
                    report = report.bind(entity)(tango);
                    tango = _closure3_slot1;
                    verify = verify != tango;
                    tango = undefined;
                    if(!verify) { _fun110054_ip = 192; continue _fun110054 }
 188:
                    tango = _closure3_slot1;
 192:
                    tango = report.bind(entity)(oscar, tango);
                    if(tango) { _fun110054_ip = 256; continue _fun110054 }
 201:
                    oscar = _closure3_slot0;
                    report = oscar.handleMediaPlayerPlaybackSourceChanged;
                    tango = {};
                    verify = _closure3_slot1;
                    tango['source'] = verify;
                    tango = report.bind(oscar)(tango);
                    report = oscar.handleMediaPlayerPlaybackRateChanged;
                    tango = {};
                    tango['source'] = verify;
                    verify = _closure3_slot2;
                    tango['rate'] = verify;
                    tango = report.bind(oscar)(tango);
                    tango = undefined;
                    return tango;
 256:
                    report = _closure1_slot19;
                    tango = report.setState;
                    zulu = {};
                    oscar = _closure3_slot2;
                    zulu['rate'] = oscar;
                    verify = 0;
                    oscar = verify !== oscar;
                    zulu['isPlaying'] = oscar;
                    oscar = false;
                    options = oscar === options;
                    if(!options) { _fun110054_ip = 305; continue _fun110054 }
 297:
                    oscar = _closure3_slot2;
                    options = oscar > verify;
 305:
                    oscar = !options;
                    if(options) { _fun110054_ip = 314; continue _fun110054 }
 311:
                    oscar = golf;
 314:
                    zulu['wasPipClosedByUser'] = oscar;
                    zulu = tango.bind(report)(zulu);
                    zulu = _closure3_slot0;
                    mike = zulu.updateDisplayState;
                    mike = mike.bind(zulu)();
                    return entity;
                }
            };
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        report['value'] = golf;
        entity[9] = report;
        report = {};
        golf = 'handleMediaPlayerPlaybackProgressUpdated';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            entity = argFoo;
            zulu = entity.source;
            var _closure3_slot0 = zulu;
            zulu = entity.time;
            var _closure3_slot1 = zulu;
            entity = entity.duration;
            var _closure3_slot2 = entity;
            tango = _closure1_slot0;
            zulu = _closure1_slot2;
            entity = 16;
            zulu = zulu[entity];
            entity = undefined;
            tango = tango.bind(entity)(zulu);
            zulu = tango.batchUpdates;
            mike = function() {
                _fun110056: for(var _fun110056_ip = 0; ; ) switch(_fun110056_ip) {
 0:
                    zulu = _closure1_slot19;
                    entity = zulu.getState;
                    zulu = entity.bind(zulu)();
                    report = _closure1_slot1;
                    tango = _closure1_slot2;
                    entity = 18;
                    tango = tango[entity];
                    entity = undefined;
                    golf = report.bind(entity)(tango);
                    oscar = zulu.activeMediaPlayerSource;
                    zulu = _closure3_slot0;
                    report = null;
                    options = report != zulu;
                    zulu = undefined;
                    if(!options) { _fun110056_ip = 67; continue _fun110056 }
 63:
                    zulu = _closure3_slot0;
 67:
                    zulu = golf.bind(entity)(oscar, zulu);
                    if(!zulu) { _fun110056_ip = 147; continue _fun110056 }
 76:
                    oscar = _closure3_slot2;
                    zulu = 0;
                    zulu = oscar > zulu;
                    oscar = null;
                    if(!zulu) { _fun110056_ip = 113; continue _fun110056 }
 91:
                    zulu = {};
                    golf = _closure3_slot1;
                    zulu['time'] = golf;
                    tango = _closure3_slot2;
                    zulu['duration'] = tango;
                    oscar = zulu;
 113:
                    tango = _closure1_slot19;
                    zulu = tango.setState;
                    mike = {};
                    golf = report != oscar;
                    report = undefined;
                    if(!golf) { _fun110056_ip = 137; continue _fun110056 }
 134:
                    report = oscar;
 137:
                    mike['progress'] = report;
                    mike = zulu.bind(tango)(mike);
 147:
                    return entity;
                }
            };
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        report['value'] = golf;
        entity[10] = report;
        report = {};
        golf = 'handleMediaPlayerPlaybackSourceChanged';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            entity = this;
            var _closure3_slot0 = entity;
            entity = argFoo;
            entity = entity.source;
            var _closure3_slot1 = entity;
            tango = _closure1_slot0;
            zulu = _closure1_slot2;
            entity = 16;
            zulu = zulu[entity];
            entity = undefined;
            tango = tango.bind(entity)(zulu);
            zulu = tango.batchUpdates;
            mike = function() {
                _fun110058: for(var _fun110058_ip = 0; ; ) switch(_fun110058_ip) {
 0:
                    mike = _closure1_slot19;
                    entity = mike.getState;
                    tango = entity.bind(mike)();
                    options = _closure1_slot18;
                    oscar = options.verbose;
                    entity = _closure3_slot1;
                    golf = null;
                    report = golf == entity;
                    entity = undefined;
                    offset = undefined;
                    if(report) { _fun110058_ip = 56; continue _fun110058 }
 47:
                    report = _closure3_slot1;
                    offset = report.id;
 56:
                    report = global;
                    report = report.HermesInternal;
                    verify = report.concat;
                    report = 'Playback source changed: ';
                    report = verify.bind(report)(offset);
                    report = oscar.bind(options)(report);
                    oscar = _closure1_slot1;
                    options = _closure1_slot2;
                    report = 18;
                    report = options[report];
                    oscar = oscar.bind(entity)(report);
                    tango = tango.activeMediaPlayerSource;
                    options = golf != tango;
                    report = undefined;
                    if(!options) { _fun110058_ip = 123; continue _fun110058 }
 120:
                    report = tango;
 123:
                    tango = _closure3_slot1;
                    options = golf != tango;
                    tango = undefined;
                    if(!options) { _fun110058_ip = 140; continue _fun110058 }
 136:
                    tango = _closure3_slot1;
 140:
                    tango = oscar.bind(entity)(report, tango);
                    if(tango) { _fun110058_ip = 274; continue _fun110058 }
 152:
                    report = _closure1_slot19;
                    tango = report.setState;
                    zulu = {'activeMediaPlayerSource': null, 'mediaSourceMessage': null, 'progress': null, 'rate': 0, 'isPlaying': false, 'wasPipClosedByUser': false};
                    oscar = _closure3_slot1;
                    options = golf != oscar;
                    oscar = undefined;
                    if(!options) { _fun110058_ip = 193; continue _fun110058 }
 189:
                    oscar = _closure3_slot1;
 193:
                    zulu['activeMediaPlayerSource'] = oscar;
                    oscar = _closure3_slot1;
                    golf = golf != oscar;
                    oscar = undefined;
                    if(!golf) { _fun110058_ip = 233; continue _fun110058 }
 212:
                    verify = _closure3_slot0;
                    options = verify.getOrFetchMediaSourceMessage;
                    golf = _closure3_slot1;
                    oscar = options.bind(verify)(golf);
 233:
                    zulu['mediaSourceMessage'] = oscar;
                    zulu['progress'] = entity;
                    zulu = tango.bind(report)(zulu);
                    zulu = _closure3_slot0;
                    mike = zulu.updateMediaPermissions;
                    mike = mike.bind(zulu)();
                    mike = zulu.updateDisplayState;
                    mike = mike.bind(zulu)();
 274:
                    return entity;
                }
            };
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        report['value'] = golf;
        entity[11] = report;
        report = {};
        golf = 'getOrFetchMediaSourceMessage';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun110059: for(var _fun110059_ip = 0; ; ) switch(_fun110059_ip) {
 0:
                entity = argFoo;
                zulu = this;
                var _closure3_slot0 = zulu;
                golf = entity.channelId;
                oscar = entity.messageId;
                tango = null;
                if(!(tango != oscar)) { _fun110059_ip = 32; continue _fun110059 }
 28:
                if(!(tango == golf)) { _fun110059_ip = 36; continue _fun110059 }
 32:
                entity = undefined;
                return entity;
 36:
                report = _closure1_slot13;
                entity = report.getMessage;
                entity = entity.bind(report)(golf, oscar);
                if(!(tango == entity)) { _fun110059_ip = 119; continue _fun110059 }
 59:
                report = _closure1_slot1;
                tango = _closure1_slot2;
                zulu = 19;
                tango = tango[zulu];
                zulu = undefined;
                report = report.bind(zulu)(tango);
                tango = report.fetchMessage;
                zulu = {};
                zulu['channelId'] = golf;
                zulu['messageId'] = oscar;
                tango = tango.bind(report)(zulu);
                zulu = tango.then;
                mike = function(argFoo) {
                    _fun110060: for(var _fun110060_ip = 0; ; ) switch(_fun110060_ip) {
 0:
                        zulu = argFoo;
                        entity = null;
                        if(!(entity != zulu)) { _fun110060_ip = 29; continue _fun110060 }
 9:
                        mike = _closure3_slot0;
                        entity = mike.handleMediaSourceMessageUpdated;
                        entity = entity.bind(mike)(zulu);
 29:
                        entity = undefined;
                        return entity;
                    }
                };
                mike = zulu.bind(tango)(mike);
 119:
                return entity;
            }
        };
        report['value'] = golf;
        entity[12] = report;
        report = {};
        golf = 'handleMediaSourceMessageUpdated';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            entity = argFoo;
            var _closure3_slot0 = entity;
            tango = _closure1_slot0;
            zulu = _closure1_slot2;
            entity = 16;
            zulu = zulu[entity];
            entity = undefined;
            tango = tango.bind(entity)(zulu);
            zulu = tango.batchUpdates;
            mike = function() {
                _fun110062: for(var _fun110062_ip = 0; ; ) switch(_fun110062_ip) {
 0:
                    zulu = _closure1_slot19;
                    entity = zulu.getState;
                    entity = entity.bind(zulu)();
                    zulu = entity.activeMediaPlayerSource;
                    entity = null;
                    report = entity == zulu;
                    entity = undefined;
                    tango = undefined;
                    if(report) { _fun110062_ip = 41; continue _fun110062 }
 36:
                    tango = zulu.messageId;
 41:
                    zulu = _closure3_slot0;
                    zulu = zulu.id;
                    if(!(tango === zulu)) { _fun110062_ip = 83; continue _fun110062 }
 57:
                    tango = _closure1_slot19;
                    zulu = tango.setState;
                    mike = {};
                    report = _closure3_slot0;
                    mike['mediaSourceMessage'] = report;
                    mike = zulu.bind(tango)(mike);
 83:
                    return entity;
                }
            };
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        report['value'] = golf;
        entity[13] = report;
        report = {};
        golf = 'handleMediaPlayerViewWillAppear';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            entity = argFoo;
            zulu = this;
            var _closure3_slot0 = zulu;
            zulu = entity.mediaItemIds;
            var _closure3_slot1 = zulu;
            entity = entity.channelId;
            var _closure3_slot2 = entity;
            tango = _closure1_slot0;
            zulu = _closure1_slot2;
            entity = 16;
            zulu = zulu[entity];
            entity = undefined;
            tango = tango.bind(entity)(zulu);
            zulu = tango.batchUpdates;
            mike = function() {
                _fun110064: for(var _fun110064_ip = 0; ; ) switch(_fun110064_ip) {
 0:
                    zulu = _closure1_slot19;
                    entity = zulu.getState;
                    entity = entity.bind(zulu)();
                    report = entity.displayedMediaItemIdsPerChannel;
                    zulu = _closure3_slot2;
                    golf = report[zulu];
                    zulu = null;
                    if(!(zulu == golf)) { _fun110064_ip = 44; continue _fun110064 }
 40:
                    golf = new Array(0);
 44:
                    zulu = global;
                    oscar = zulu.Set;
                    zulu = new Array(0);
                    options = 0;
                    offset = zulu;
                    verify = golf;
                    options = arraySpread(offset, verify, options);
                    verify = _closure3_slot1;
                    offset = zulu;
                    tango = arraySpread(offset, verify, options);
                    tango = oscar.prototype;
                    tango = Object.create(tango, {constructor: {value: oscar}});
                    yankee = tango;
                    offset = zulu;
                    zulu = new yankee[oscar](offset, verify);
                    tango = zulu instanceof Object ? zulu : tango;
                    zulu = _closure3_slot2;
                    report[zulu] = tango;
                    tango = _closure1_slot19;
                    zulu = tango.setState;
                    mike = {};
                    mike['displayedMediaItemIdsPerChannel'] = report;
                    mike = zulu.bind(tango)(mike);
                    mike = _closure3_slot0;
                    entity = mike.updateDisplayState;
                    entity = entity.bind(mike)();
                    entity = undefined;
                    return entity;
                }
            };
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        report['value'] = golf;
        entity[14] = report;
        report = {};
        golf = 'handleMediaPlayerViewDidDisappear';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            entity = argFoo;
            zulu = this;
            var _closure3_slot0 = zulu;
            zulu = entity.mediaItemIds;
            var _closure3_slot1 = zulu;
            entity = entity.channelId;
            var _closure3_slot2 = entity;
            tango = _closure1_slot0;
            zulu = _closure1_slot2;
            entity = 16;
            zulu = zulu[entity];
            entity = undefined;
            tango = tango.bind(entity)(zulu);
            zulu = tango.batchUpdates;
            mike = function() {
                _fun110066: for(var _fun110066_ip = 0; ; ) switch(_fun110066_ip) {
 0:
                    zulu = _closure1_slot19;
                    entity = zulu.getState;
                    entity = entity.bind(zulu)();
                    report = entity.displayedMediaItemIdsPerChannel;
                    tango = global;
                    golf = tango.Set;
                    zulu = _closure3_slot2;
                    zulu = report[zulu];
                    oscar = null;
                    if(!(oscar == zulu)) { _fun110066_ip = 74; continue _fun110066 }
 48:
                    tango = tango.Set;
                    oscar = tango.prototype;
                    oscar = Object.create(oscar, {constructor: {value: tango}});
                    romeo = oscar;
                    tango = new romeo[tango](yankee);
                    zulu = tango instanceof Object ? tango : oscar;
 74:
                    options = new Array(0);
                    oscar = 0;
                    yankee = options;
                    offset = zulu;
                    verify = 0;
                    zulu = arraySpread(yankee, offset, verify);
                    tango = options.filter;
                    zulu = function(argFoo) {
                        zulu = _closure3_slot1;
                        mike = zulu.includes;
                        entity = argFoo;
                        entity = mike.bind(zulu)(entity);
                        entity = !entity;
                        return entity;
                    };
                    yankee = tango.bind(options)(zulu);
                    tango = golf.prototype;
                    tango = Object.create(tango, {constructor: {value: golf}});
                    romeo = tango;
                    zulu = new romeo[golf](yankee, offset);
                    tango = zulu instanceof Object ? zulu : tango;
                    zulu = tango.size;
                    if(!(oscar !== zulu)) { _fun110066_ip = 150; continue _fun110066 }
 140:
                    zulu = _closure3_slot2;
                    report[zulu] = tango;
                    _fun110066_ip = 158; continue _fun110066;
 150:
                    zulu = _closure3_slot2;
                    zulu = delete report[zulu];
 158:
                    tango = _closure1_slot19;
                    zulu = tango.setState;
                    mike = {};
                    mike['displayedMediaItemIdsPerChannel'] = report;
                    mike = zulu.bind(tango)(mike);
                    mike = _closure3_slot0;
                    entity = mike.updateDisplayState;
                    entity = entity.bind(mike)();
                    entity = undefined;
                    return entity;
                }
            };
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        report['value'] = golf;
        entity[15] = report;
        report = {};
        golf = 'updateDisplayState';
        report['key'] = golf;
        oscar = function() { // Original name: value
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            entity = 16;
            mike = mike[entity];
            entity = undefined;
            tango = zulu.bind(entity)(mike);
            zulu = tango.batchUpdates;
            mike = function() {
                _fun110069: for(var _fun110069_ip = 0; ; ) switch(_fun110069_ip) {
 0:
                    zulu = _closure1_slot19;
                    entity = zulu.getState;
                    report = entity.bind(zulu)();
                    oscar = report.displayedMediaItemIdsPerChannel;
                    tango = report.currentlyDisplayedChannelId;
                    zulu = report.activeMediaPlayerSource;
                    entity = undefined;
                    if(!(entity === zulu)) { _fun110069_ip = 43; continue _fun110069 }
 41:
                    zulu = {};
 43:
                    yankee = zulu.id;
                    zulu = report.wasPipClosedByUser;
                    golf = report.progress;
                    options = report.isPlaying;
                    if(zulu) { _fun110069_ip = 343; continue _fun110069 }
 72:
                    if(options) { _fun110069_ip = 99; continue _fun110069 }
 75:
                    zulu = null;
                    zulu = zulu != golf;
                    if(!zulu) { _fun110069_ip = 96; continue _fun110069 }
 84:
                    report = _closure1_slot22;
                    report = report.bind(entity)(golf);
                    zulu = !report;
 96:
                    options = zulu;
 99:
                    report = _closure1_slot0;
                    golf = _closure1_slot2;
                    zulu = 20;
                    zulu = golf[zulu];
                    report = report.bind(entity)(zulu);
                    zulu = report.getFocusedChannelId;
                    golf = zulu.bind(report)();
                    zulu = null;
                    if(!(zulu != golf)) { _fun110069_ip = 172; continue _fun110069 }
 135:
                    if(!(tango !== golf)) { _fun110069_ip = 172; continue _fun110069 }
 139:
                    offset = oscar;
                    for(tango in offset)
 150:
                    {
 159:
                        foxtrot = tango;
                        if(foxtrot === golf) { _fun110069_ip = 150; continue _fun110069 }
 166:
                        foxtrot = delete oscar[foxtrot];
                        _fun110069_ip = 150; continue _fun110069;
                    }
 172:
                    if(!(zulu == yankee)) { _fun110069_ip = 213; continue _fun110069 }
 176:
                    verify = _closure1_slot19;
                    report = verify.setState;
                    tango = {};
                    tango['showPip'] = options;
                    tango['currentlyDisplayedChannelId'] = golf;
                    tango['displayedMediaItemIdsPerChannel'] = oscar;
                    tango = report.bind(verify)(tango);
                    _fun110069_ip = 367; continue _fun110069;
 213:
                    if(!(zulu == golf)) { _fun110069_ip = 251; continue _fun110069 }
 217:
                    verify = _closure1_slot19;
                    report = verify.setState;
                    tango = {};
                    tango['showPip'] = options;
                    tango['currentlyDisplayedChannelId'] = golf;
                    tango['displayedMediaItemIdsPerChannel'] = oscar;
                    tango = report.bind(verify)(tango);
                    _fun110069_ip = 367; continue _fun110069;
 251:
                    offset = oscar[golf];
                    if(!(zulu == offset)) { _fun110069_ip = 293; continue _fun110069 }
 259:
                    report = _closure1_slot19;
                    tango = report.setState;
                    zulu = {};
                    zulu['showPip'] = options;
                    zulu['currentlyDisplayedChannelId'] = golf;
                    zulu['displayedMediaItemIdsPerChannel'] = oscar;
                    zulu = tango.bind(report)(zulu);
                    _fun110069_ip = 367; continue _fun110069;
 293:
                    report = _closure1_slot19;
                    tango = report.setState;
                    zulu = {};
                    if(!options) { _fun110069_ip = 321; continue _fun110069 }
 308:
                    verify = offset.has;
                    verify = verify.bind(offset)(yankee);
                    options = !verify;
 321:
                    zulu['showPip'] = options;
                    zulu['currentlyDisplayedChannelId'] = golf;
                    zulu['displayedMediaItemIdsPerChannel'] = oscar;
                    zulu = tango.bind(report)(zulu);
                    _fun110069_ip = 367; continue _fun110069;
 343:
                    tango = _closure1_slot19;
                    zulu = tango.setState;
                    mike = {};
                    report = false;
                    mike['showPip'] = report;
                    mike = zulu.bind(tango)(mike);
 367:
                    return entity;
                }
            };
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        report['value'] = oscar;
        entity[16] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    report = report.bind(entity)(oscar);
    oscar = report.prototype;
    oscar = Object.create(oscar, {constructor: {value: report}});
    backup = oscar;
    report = new backup[report](foxtrot);
    report = report instanceof Object ? report : oscar;
    oscar = 22;
    oscar = options[oscar];
    options = golf.bind(entity)(oscar);
    golf = options.fileFinishedImporting;
    oscar = 'modules/media/native/MediaPlayerManager.tsx';
    oscar = golf.bind(options)(oscar);
    zulu['default'] = report;
    zulu['useMediaPlayerManagerStore'] = tango;
    zulu['isPlaybackComplete'] = mike;
    return entity;
})();