// app/modules/share/native/AppShare.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo) { // Original name: AppShare
        _fun127904: for(var _fun127904_ip = 0; ; ) switch(_fun127904_ip) {
 0:
            offset = argFoo;
            report = offset.initialized;
            tango = _closure1_slot4;
            zulu = tango.useEffect;
            mike = function() {
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 14;
                mike = mike[entity];
                entity = undefined;
                tango = zulu.bind(entity)(mike);
                zulu = tango.trackAppUIViewed;
                mike = 'share-screen';
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            entity = new Array(0);
            entity = zulu.bind(tango)(mike, entity);
            tango = _closure1_slot11;
            mike = _closure1_slot1;
            zulu = _closure1_slot2;
            entity = 15;
            entity = zulu[entity];
            zulu = undefined;
            mike = mike.bind(zulu)(entity);
            entity = {};
            golf = 'share';
            entity['appEntryKey'] = golf;
            verify = _closure1_slot10;
            if(report) { _fun127904_ip = 120; continue _fun127904 }
 84:
            golf = _closure1_slot0;
            options = _closure1_slot2;
            report = 17;
            report = options[report];
            report = golf.bind(zulu)(report);
            golf = report.SceneLoadingIndicator;
            report = {};
            golf = verify.bind(zulu)(golf, report);
            _fun127904_ip = 153; continue _fun127904;
 120:
            options = _closure1_slot1;
            yankee = _closure1_slot2;
            report = 16;
            report = yankee[report];
            options = options.bind(zulu)(report);
            report = {};
            report['sharedContent'] = offset;
            golf = verify.bind(zulu)(options, report);
 153:
            report = new Array(2);
            report[0] = golf;
            options = _closure1_slot10;
            golf = _closure1_slot1;
            verify = _closure1_slot2;
            oscar = 18;
            oscar = verify[oscar];
            golf = golf.bind(zulu)(oscar);
            oscar = {};
            oscar = options.bind(zulu)(golf, oscar);
            report[1] = oscar;
            entity['children'] = report;
            entity = tango.bind(zulu)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot12 = entity;
    entity = function(argFoo) { // Original name: AppShare2
        _fun127906: for(var _fun127906_ip = 0; ; ) switch(_fun127906_ip) {
 0:
            offset = argFoo;
            var _closure2_slot0 = offset;
            mike = _closure1_slot1;
            report = _closure1_slot2;
            zulu = 19;
            zulu = report[zulu];
            tango = undefined;
            zulu = mike.bind(tango)(zulu);
            entity = function() {
                entity = {};
                mike = _closure2_slot0;
                zulu = mike.attachments;
                zulu = zulu.length;
                entity['numAttachments'] = zulu;
                tango = mike.attachments;
                zulu = tango.map;
                mike = function(argFoo) {
                    _fun127908: for(var _fun127908_ip = 0; ; ) switch(_fun127908_ip) {
 0:
                        entity = argFoo;
                        mike = entity.mimeType;
                        entity = null;
                        zulu = entity != mike;
                        entity = 'unknown';
                        if(!zulu) { _fun127908_ip = 25; continue _fun127908 }
 22:
                        entity = mike;
 25:
                        return entity;
                    }
                };
                mike = zulu.bind(tango)(mike);
                entity['mimeTypes'] = mike;
                oscar = entity.numAttachments;
                mike = entity.mimeTypes;
                tango = _closure1_slot0;
                zulu = _closure1_slot2;
                entity = 14;
                zulu = zulu[entity];
                entity = undefined;
                report = tango.bind(entity)(zulu);
                tango = report.trackAppUIViewed;
                zulu = {};
                zulu['share_num_attachments'] = oscar;
                zulu['share_attachment_mimetypes'] = mike;
                mike = 'share';
                mike = tango.bind(report)(mike, zulu);
                return entity;
            };
            entity = zulu.bind(tango)(entity);
            zulu = _closure1_slot11;
            entity = 15;
            entity = report[entity];
            mike = mike.bind(tango)(entity);
            entity = {};
            report = 'share';
            entity['appEntryKey'] = report;
            report = offset.initialized;
            verify = _closure1_slot10;
            if(report) { _fun127906_ip = 122; continue _fun127906 }
 86:
            golf = _closure1_slot0;
            options = _closure1_slot2;
            report = 17;
            report = options[report];
            report = golf.bind(tango)(report);
            golf = report.SceneLoadingIndicator;
            report = {};
            golf = verify.bind(tango)(golf, report);
            _fun127906_ip = 170; continue _fun127906;
 122:
            options = _closure1_slot1;
            yankee = _closure1_slot2;
            report = 20;
            report = yankee[report];
            options = options.bind(tango)(report);
            report = {};
            report['sharedContent'] = offset;
            offset = _closure1_slot5;
            offset = offset.exitApp;
            report['onClose'] = offset;
            golf = verify.bind(tango)(options, report);
 170:
            report = new Array(4);
            report[0] = golf;
            yankee = _closure1_slot10;
            golf = _closure1_slot0;
            verify = _closure1_slot2;
            options = 21;
            options = verify[options];
            options = golf.bind(tango)(options);
            offset = options.ActionSheetContainer;
            options = {};
            options = yankee.bind(tango)(offset, options);
            report[1] = options;
            yankee = _closure1_slot10;
            offset = _closure1_slot1;
            options = 18;
            options = verify[options];
            offset = offset.bind(tango)(options);
            options = {};
            options = yankee.bind(tango)(offset, options);
            report[2] = options;
            options = _closure1_slot10;
            oscar = 22;
            oscar = verify[oscar];
            oscar = golf.bind(tango)(oscar);
            golf = oscar.AlertModalContainer;
            oscar = {};
            oscar = options.bind(tango)(golf, oscar);
            report[3] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot13 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    options = oscar[tango];
    tango = argCorge;
    tango = tango.bind(entity)(options);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    options = tango.BackHandler;
    var _closure1_slot5 = options;
    tango = tango.NativeModules;
    var _closure1_slot6 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = 4;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = 5;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 6;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot8 = tango;
    tango = 7;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.AnalyticEvents;
    var _closure1_slot9 = tango;
    tango = 8;
    golf = oscar[tango];
    golf = report.bind(entity)(golf);
    golf = golf.jsx;
    var _closure1_slot10 = golf;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsxs;
    var _closure1_slot11 = tango;
    tango = 27;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/share/native/AppShare.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: AppShareWrapped
        _fun127909: for(var _fun127909_ip = 0; ; ) switch(_fun127909_ip) {
 0:
            oscar = argFoo;
            var _closure2_slot0 = oscar;
            entity = function(argFoo) { // Original name: useInitialization
                _fun127910: for(var _fun127910_ip = 0; ; ) switch(_fun127910_ip) {
 0:
                    entity = argFoo;
                    golf = entity.targetUserId;
                    var _closure3_slot0 = golf;
                    offset = undefined;
                    var _closure3_slot3 = offset;
                    report = _closure1_slot4;
                    mike = report.useState;
                    entity = false;
                    mike = mike.bind(report)(entity);
                    entity = _closure1_slot3;
                    verify = 2;
                    report = entity.bind(offset)(mike, verify);
                    mike = 0;
                    entity = report[mike];
                    var _closure3_slot1 = entity;
                    oscar = 1;
                    report = report[oscar];
                    var _closure3_slot2 = report;
                    yankee = _closure1_slot4;
                    options = yankee.useState;
                    report = null;
                    report = report == golf;
                    if(report) { _fun127910_ip = 110; continue _fun127910 }
 92:
                    foxtrot = _closure1_slot8;
                    romeo = foxtrot.getId;
                    romeo = romeo.bind(foxtrot)();
                    report = romeo === golf;
 110:
                    options = options.bind(yankee)(report);
                    report = _closure1_slot3;
                    report = report.bind(offset)(options, verify);
                    mike = report[mike];
                    report = report[oscar];
                    _closure3_slot3 = report;
                    verify = _closure1_slot4;
                    options = verify.useEffect;
                    oscar = new Array(1);
                    oscar[0] = entity;
                    report = function() {
                        _fun127911: for(var _fun127911_ip = 0; ; ) switch(_fun127911_ip) {
 0:
                            mike = _closure3_slot1;
                            if(mike) { _fun127911_ip = 56; continue _fun127911 }
 10:
                            tango = _closure1_slot1;
                            zulu = _closure1_slot2;
                            mike = 12;
                            mike = zulu[mike];
                            zulu = undefined;
                            tango = tango.bind(zulu)(mike);
                            mike = tango.init;
                            mike = mike.bind(tango)();
                            mike = _closure3_slot2;
                            entity = true;
                            entity = mike.bind(zulu)(entity);
 56:
                            entity = undefined;
                            return entity;
                        }
                    };
                    report = options.bind(verify)(report, oscar);
                    oscar = _closure1_slot4;
                    report = oscar.useEffect;
                    tango = new Array(1);
                    tango[0] = golf;
                    zulu = function() {
                        _fun127912: for(var _fun127912_ip = 0; ; ) switch(_fun127912_ip) {
 0:
                            zulu = _closure3_slot0;
                            entity = null;
                            entity = entity != zulu;
                            if(!entity) { _fun127912_ip = 41; continue _fun127912 }
 16:
                            tango = _closure1_slot8;
                            zulu = tango.getId;
                            zulu = zulu.bind(tango)();
                            mike = _closure3_slot0;
                            entity = zulu !== mike;
 41:
                            if(!entity) { _fun127912_ip = 72; continue _fun127912 }
 44:
                            entity = global;
                            tango = entity.setTimeout;
                            zulu = undefined;
                            mike = function() {
                                zulu = _closure1_slot0;
                                mike = _closure1_slot2;
                                entity = 13;
                                mike = mike[entity];
                                entity = undefined;
                                report = zulu.bind(entity)(mike);
                                tango = report.switchAccount;
                                zulu = _closure3_slot0;
                                mike = false;
                                tango = tango.bind(report)(zulu, mike);
                                zulu = tango.then;
                                mike = function() {
                                    zulu = _closure3_slot3;
                                    entity = undefined;
                                    mike = true;
                                    mike = zulu.bind(entity)(mike);
                                    return entity;
                                };
                                mike = zulu.bind(tango)(mike);
                                return entity;
                            };
                            entity = 18;
                            entity = tango.bind(zulu)(mike, entity);
 72:
                            entity = undefined;
                            return entity;
                        }
                    };
                    zulu = report.bind(oscar)(zulu, tango);
                    if(!entity) { _fun127910_ip = 203; continue _fun127910 }
 200:
                    entity = mike;
 203:
                    return entity;
                }
            };
            report = undefined;
            golf = entity.bind(report)(oscar);
            entity = function() { // Original name: useAuthenticated
                report = _closure1_slot0;
                tango = _closure1_slot2;
                entity = 9;
                tango = tango[entity];
                entity = undefined;
                golf = report.bind(entity)(tango);
                oscar = golf.useStateFromStores;
                tango = _closure1_slot8;
                report = new Array(1);
                report[0] = tango;
                tango = function() {
                    mike = _closure1_slot8;
                    entity = mike.isAuthenticated;
                    entity = entity.bind(mike)();
                    return entity;
                };
                oscar = oscar.bind(golf)(report, tango);
                var _closure3_slot0 = oscar;
                report = _closure1_slot4;
                tango = report.useEffect;
                zulu = new Array(1);
                zulu[0] = oscar;
                mike = function() {
                    _fun127917: for(var _fun127917_ip = 0; ; ) switch(_fun127917_ip) {
 0:
                        entity = _closure3_slot0;
                        if(!entity) { _fun127917_ip = 108; continue _fun127917 }
 10:
                        zulu = _closure1_slot1;
                        report = _closure1_slot2;
                        mike = 10;
                        mike = report[mike];
                        tango = undefined;
                        oscar = zulu.bind(tango)(mike);
                        zulu = oscar.startSession;
                        golf = _closure1_slot8;
                        mike = golf.getToken;
                        mike = mike.bind(golf)();
                        mike = zulu.bind(oscar)(mike);
                        zulu = _closure1_slot0;
                        mike = 11;
                        mike = report[mike];
                        zulu = zulu.bind(tango)(mike);
                        mike = zulu.isAndroid;
                        mike = mike.bind(zulu)();
                        if(!mike) { _fun127917_ip = 108; continue _fun127917 }
 88:
                        entity = _closure1_slot6;
                        mike = entity.NativePermissionManager;
                        entity = mike.requestNotificationAuthorization;
                        entity = entity.bind(mike)();
 108:
                        entity = undefined;
                        return entity;
                    }
                };
                mike = tango.bind(report)(mike, zulu);
                return entity;
            };
            entity = entity.bind(report)();
            offset = _closure1_slot0;
            yankee = _closure1_slot2;
            entity = 9;
            entity = yankee[entity];
            options = offset.bind(report)(entity);
            tango = options.useStateFromStores;
            entity = _closure1_slot7;
            zulu = new Array(1);
            zulu[0] = entity;
            entity = function() {
                mike = _closure1_slot7;
                entity = mike.isConnected;
                entity = entity.bind(mike)();
                return entity;
            };
            tango = tango.bind(options)(zulu, entity);
            entity = 23;
            entity = yankee[entity];
            zulu = offset.bind(report)(entity);
            entity = zulu.useNewShareScreen;
            zulu = entity.bind(zulu)();
            entity = 24;
            options = yankee[entity];
            options = offset.bind(report)(options);
            backup = options.ShareScreenRevampExperiment;
            foxtrot = backup.useExperiment;
            options = {};
            romeo = 'AppShareWrapped';
            options['location'] = romeo;
            options = foxtrot.bind(backup)(options);
            options = options.enabled;
            entity = yankee[entity];
            entity = offset.bind(report)(entity);
            yankee = entity.ShareScreenRevampCommonTriggerExperiment;
            offset = yankee.useExperiment;
            entity = {};
            entity['location'] = romeo;
            entity = offset.bind(yankee)(entity);
            entity = entity.enabled;
            romeo = _closure1_slot4;
            yankee = romeo.useEffect;
            offset = oscar.attachments;
            foxtrot = offset.length;
            offset = new Array(2);
            offset[0] = foxtrot;
            foxtrot = oscar.text;
            offset[1] = foxtrot;
            verify = function() {
                _fun127919: for(var _fun127919_ip = 0; ; ) switch(_fun127919_ip) {
 0:
                    tango = _closure1_slot1;
                    zulu = _closure1_slot2;
                    entity = 25;
                    zulu = zulu[entity];
                    entity = undefined;
                    report = tango.bind(entity)(zulu);
                    tango = report.track;
                    mike = _closure1_slot9;
                    zulu = mike.EXTERNAL_SHARE_OPENED;
                    mike = {};
                    golf = _closure2_slot0;
                    options = golf.text;
                    golf = null;
                    golf = golf != options;
                    if(!golf) { _fun127919_ip = 83; continue _fun127919 }
 63:
                    options = _closure2_slot0;
                    options = options.text;
                    verify = options.length;
                    options = 0;
                    golf = verify > options;
 83:
                    mike['has_content'] = golf;
                    oscar = _closure2_slot0;
                    oscar = oscar.attachments;
                    golf = oscar.length;
                    oscar = 0;
                    oscar = golf > oscar;
                    mike['has_attachment'] = oscar;
                    mike = tango.bind(report)(zulu, mike);
                    return entity;
                }
            };
            verify = yankee.bind(romeo)(verify, offset);
            if(options) { _fun127909_ip = 384; continue _fun127909 }
 248:
            if(entity) { _fun127909_ip = 384; continue _fun127909 }
 254:
            options = null;
            entity = null;
            if(!tango) { _fun127909_ip = 382; continue _fun127909 }
 261:
            verify = _closure1_slot10;
            if(zulu) { _fun127909_ip = 348; continue _fun127909 }
 268:
            tango = _closure1_slot1;
            offset = _closure1_slot2;
            zulu = 26;
            zulu = offset[zulu];
            tango = tango.bind(report)(zulu);
            zulu = {};
            offset = oscar.attachments;
            zulu['attachments'] = offset;
            offset = oscar.text;
            yankee = options != offset;
            options = '';
            if(!yankee) { _fun127909_ip = 320; continue _fun127909 }
 317:
            options = offset;
 320:
            zulu['text'] = options;
            options = oscar.targetChannelId;
            zulu['targetChannelId'] = options;
            zulu['initialized'] = golf;
            zulu = verify.bind(report)(tango, zulu);
            _fun127909_ip = 379; continue _fun127909;
 348:
            options = _closure1_slot12;
            tango = {};
            output = tango;
            sizing = oscar;
            offset = copyDataProperties(output, sizing);
            offset = 'initialized';
            tango[offset] = golf;
            zulu = verify.bind(report)(options, tango);
 379:
            entity = zulu;
 382:
            _fun127909_ip = 419; continue _fun127909;
 384:
            tango = _closure1_slot10;
            zulu = _closure1_slot13;
            mike = {};
            output = mike;
            sizing = oscar;
            oscar = copyDataProperties(output, sizing);
            oscar = 'initialized';
            mike[oscar] = golf;
            entity = tango.bind(report)(zulu, mike);
 419:
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();