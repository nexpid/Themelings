// app/modules/share/native/AppShare.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function(argFoo) { // Original name: AppShare
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            offset = argFoo;
            report = offset.initialized;
            tangon = _closure1_slot4;
            zuuluu = tangon.useEffect;
            michal = function() {
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 14;
                michal = michal[entity];
                entity = undefined;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.trackAppUIViewed;
                michal = 'share-screen';
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            entity = new Array(0);
            entity = zuuluu.bind(tangon)(michal, entity);
            tangon = _closure1_slot11;
            michal = _closure1_slot1;
            zuuluu = _closure1_slot2;
            entity = 15;
            entity = zuuluu[entity];
            zuuluu = undefined;
            michal = michal.bind(zuuluu)(entity);
            entity = {};
            golfie = 'share';
            entity['appEntryKey'] = golfie;
            verify = _closure1_slot10;
            if(report) { _fun00002_ip = 120; continue _fun00001 }
 84:
            golfie = _closure1_slot0;
            option = _closure1_slot2;
            report = 17;
            report = option[report];
            report = golfie.bind(zuuluu)(report);
            golfie = report.SceneLoadingIndicator;
            report = {};
            golfie = verify.bind(zuuluu)(golfie, report);
            _fun00002_ip = 153; continue _fun00001;
 120:
            option = _closure1_slot1;
            yankee = _closure1_slot2;
            report = 16;
            report = yankee[report];
            option = option.bind(zuuluu)(report);
            report = {};
            report['sharedContent'] = offset;
            golfie = verify.bind(zuuluu)(option, report);
 153:
            report = new Array(2);
            report[0] = golfie;
            option = _closure1_slot10;
            golfie = _closure1_slot1;
            verify = _closure1_slot2;
            oscard = 18;
            oscard = verify[oscard];
            golfie = golfie.bind(zuuluu)(oscard);
            oscard = {};
            oscard = option.bind(zuuluu)(golfie, oscard);
            report[1] = oscard;
            entity['children'] = report;
            entity = tangon.bind(zuuluu)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot12 = entity;
    entity = function(argFoo) { // Original name: AppShare2
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            offset = argFoo;
            var _closure2_slot0 = offset;
            michal = _closure1_slot1;
            report = _closure1_slot2;
            zuuluu = 19;
            zuuluu = report[zuuluu];
            tangon = undefined;
            zuuluu = michal.bind(tangon)(zuuluu);
            entity = function() {
                entity = {};
                michal = _closure2_slot0;
                zuuluu = michal.attachments;
                zuuluu = zuuluu.length;
                entity['numAttachments'] = zuuluu;
                tangon = michal.attachments;
                zuuluu = tangon.map;
                michal = function(argFoo) {
                    _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                        entity = argFoo;
                        michal = entity.mimeType;
                        entity = null;
                        zuuluu = entity != michal;
                        entity = 'unknown';
                        if(!zuuluu) { _fun00006_ip = 25; continue _fun00005 }
 22:
                        entity = michal;
 25:
                        return entity;
                    }
                };
                michal = zuuluu.bind(tangon)(michal);
                entity['mimeTypes'] = michal;
                oscard = entity.numAttachments;
                michal = entity.mimeTypes;
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot2;
                entity = 14;
                zuuluu = zuuluu[entity];
                entity = undefined;
                report = tangon.bind(entity)(zuuluu);
                tangon = report.trackAppUIViewed;
                zuuluu = {};
                zuuluu['share_num_attachments'] = oscard;
                zuuluu['share_attachment_mimetypes'] = michal;
                michal = 'share';
                michal = tangon.bind(report)(michal, zuuluu);
                return entity;
            };
            entity = zuuluu.bind(tangon)(entity);
            zuuluu = _closure1_slot11;
            entity = 15;
            entity = report[entity];
            michal = michal.bind(tangon)(entity);
            entity = {};
            report = 'share';
            entity['appEntryKey'] = report;
            report = offset.initialized;
            verify = _closure1_slot10;
            if(report) { _fun00004_ip = 122; continue _fun00003 }
 86:
            golfie = _closure1_slot0;
            option = _closure1_slot2;
            report = 17;
            report = option[report];
            report = golfie.bind(tangon)(report);
            golfie = report.SceneLoadingIndicator;
            report = {};
            golfie = verify.bind(tangon)(golfie, report);
            _fun00004_ip = 170; continue _fun00003;
 122:
            option = _closure1_slot1;
            yankee = _closure1_slot2;
            report = 20;
            report = yankee[report];
            option = option.bind(tangon)(report);
            report = {};
            report['sharedContent'] = offset;
            offset = _closure1_slot5;
            offset = offset.exitApp;
            report['onClose'] = offset;
            golfie = verify.bind(tangon)(option, report);
 170:
            report = new Array(4);
            report[0] = golfie;
            yankee = _closure1_slot10;
            golfie = _closure1_slot0;
            verify = _closure1_slot2;
            option = 21;
            option = verify[option];
            option = golfie.bind(tangon)(option);
            offset = option.ActionSheetContainer;
            option = {};
            option = yankee.bind(tangon)(offset, option);
            report[1] = option;
            yankee = _closure1_slot10;
            offset = _closure1_slot1;
            option = 18;
            option = verify[option];
            offset = offset.bind(tangon)(option);
            option = {};
            option = yankee.bind(tangon)(offset, option);
            report[2] = option;
            option = _closure1_slot10;
            oscard = 22;
            oscard = verify[oscard];
            oscard = golfie.bind(tangon)(oscard);
            golfie = oscard.AlertModalContainer;
            oscard = {};
            oscard = option.bind(tangon)(golfie, oscard);
            report[3] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot13 = entity;
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
    option = oscard[tangon];
    tangon = argCor;
    tangon = tangon.bind(entity)(option);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    option = tangon.BackHandler;
    var _closure1_slot5 = option;
    tangon = tangon.NativeModules;
    var _closure1_slot6 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = 4;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = 5;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot8 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.AnalyticEvents;
    var _closure1_slot9 = tangon;
    tangon = 8;
    golfie = oscard[tangon];
    golfie = report.bind(entity)(golfie);
    golfie = golfie.jsx;
    var _closure1_slot10 = golfie;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsxs;
    var _closure1_slot11 = tangon;
    tangon = 27;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/share/native/AppShare.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: AppShareWrapped
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            oscard = argFoo;
            var _closure2_slot0 = oscard;
            entity = function(argFoo) { // Original name: useInitialization
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    entity = argFoo;
                    golfie = entity.targetUserId;
                    var _closure3_slot0 = golfie;
                    offset = undefined;
                    var _closure3_slot3 = offset;
                    report = _closure1_slot4;
                    michal = report.useState;
                    entity = false;
                    michal = michal.bind(report)(entity);
                    entity = _closure1_slot3;
                    verify = 2;
                    report = entity.bind(offset)(michal, verify);
                    michal = 0;
                    entity = report[michal];
                    var _closure3_slot1 = entity;
                    oscard = 1;
                    report = report[oscard];
                    var _closure3_slot2 = report;
                    yankee = _closure1_slot4;
                    option = yankee.useState;
                    report = null;
                    report = report == golfie;
                    if(report) { _fun00010_ip = 110; continue _fun00009 }
 92:
                    foxtra = _closure1_slot8;
                    romeon = foxtra.getId;
                    romeon = romeon.bind(foxtra)();
                    report = romeon === golfie;
 110:
                    option = option.bind(yankee)(report);
                    report = _closure1_slot3;
                    report = report.bind(offset)(option, verify);
                    michal = report[michal];
                    report = report[oscard];
                    _closure3_slot3 = report;
                    verify = _closure1_slot4;
                    option = verify.useEffect;
                    oscard = new Array(1);
                    oscard[0] = entity;
                    report = function() {
                        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                            michal = _closure3_slot1;
                            if(michal) { _fun00012_ip = 56; continue _fun00011 }
 10:
                            tangon = _closure1_slot1;
                            zuuluu = _closure1_slot2;
                            michal = 12;
                            michal = zuuluu[michal];
                            zuuluu = undefined;
                            tangon = tangon.bind(zuuluu)(michal);
                            michal = tangon.init;
                            michal = michal.bind(tangon)();
                            michal = _closure3_slot2;
                            entity = true;
                            entity = michal.bind(zuuluu)(entity);
 56:
                            entity = undefined;
                            return entity;
                        }
                    };
                    report = option.bind(verify)(report, oscard);
                    oscard = _closure1_slot4;
                    report = oscard.useEffect;
                    tangon = new Array(1);
                    tangon[0] = golfie;
                    zuuluu = function() {
                        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                            zuuluu = _closure3_slot0;
                            entity = null;
                            entity = entity != zuuluu;
                            if(!entity) { _fun00014_ip = 41; continue _fun00013 }
 16:
                            tangon = _closure1_slot8;
                            zuuluu = tangon.getId;
                            zuuluu = zuuluu.bind(tangon)();
                            michal = _closure3_slot0;
                            entity = zuuluu !== michal;
 41:
                            if(!entity) { _fun00014_ip = 72; continue _fun00013 }
 44:
                            entity = global;
                            tangon = entity.setTimeout;
                            zuuluu = undefined;
                            michal = function() {
                                zuuluu = _closure1_slot0;
                                michal = _closure1_slot2;
                                entity = 13;
                                michal = michal[entity];
                                entity = undefined;
                                report = zuuluu.bind(entity)(michal);
                                tangon = report.switchAccount;
                                zuuluu = _closure3_slot0;
                                michal = false;
                                tangon = tangon.bind(report)(zuuluu, michal);
                                zuuluu = tangon.then;
                                michal = function() {
                                    zuuluu = _closure3_slot3;
                                    entity = undefined;
                                    michal = true;
                                    michal = zuuluu.bind(entity)(michal);
                                    return entity;
                                };
                                michal = zuuluu.bind(tangon)(michal);
                                return entity;
                            };
                            entity = 18;
                            entity = tangon.bind(zuuluu)(michal, entity);
 72:
                            entity = undefined;
                            return entity;
                        }
                    };
                    zuuluu = report.bind(oscard)(zuuluu, tangon);
                    if(!entity) { _fun00010_ip = 203; continue _fun00009 }
 200:
                    entity = michal;
 203:
                    return entity;
                }
            };
            report = undefined;
            golfie = entity.bind(report)(oscard);
            entity = function() { // Original name: useAuthenticated
                report = _closure1_slot0;
                tangon = _closure1_slot2;
                entity = 9;
                tangon = tangon[entity];
                entity = undefined;
                golfie = report.bind(entity)(tangon);
                oscard = golfie.useStateFromStores;
                tangon = _closure1_slot8;
                report = new Array(1);
                report[0] = tangon;
                tangon = function() {
                    michal = _closure1_slot8;
                    entity = michal.isAuthenticated;
                    entity = entity.bind(michal)();
                    return entity;
                };
                oscard = oscard.bind(golfie)(report, tangon);
                var _closure3_slot0 = oscard;
                report = _closure1_slot4;
                tangon = report.useEffect;
                zuuluu = new Array(1);
                zuuluu[0] = oscard;
                michal = function() {
                    _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                        entity = _closure3_slot0;
                        if(!entity) { _fun00016_ip = 108; continue _fun00015 }
 10:
                        zuuluu = _closure1_slot1;
                        report = _closure1_slot2;
                        michal = 10;
                        michal = report[michal];
                        tangon = undefined;
                        oscard = zuuluu.bind(tangon)(michal);
                        zuuluu = oscard.startSession;
                        golfie = _closure1_slot8;
                        michal = golfie.getToken;
                        michal = michal.bind(golfie)();
                        michal = zuuluu.bind(oscard)(michal);
                        zuuluu = _closure1_slot0;
                        michal = 11;
                        michal = report[michal];
                        zuuluu = zuuluu.bind(tangon)(michal);
                        michal = zuuluu.isAndroid;
                        michal = michal.bind(zuuluu)();
                        if(!michal) { _fun00016_ip = 108; continue _fun00015 }
 88:
                        entity = _closure1_slot6;
                        michal = entity.NativePermissionManager;
                        entity = michal.requestNotificationAuthorization;
                        entity = entity.bind(michal)();
 108:
                        entity = undefined;
                        return entity;
                    }
                };
                michal = tangon.bind(report)(michal, zuuluu);
                return entity;
            };
            entity = entity.bind(report)();
            offset = _closure1_slot0;
            yankee = _closure1_slot2;
            entity = 9;
            entity = yankee[entity];
            option = offset.bind(report)(entity);
            tangon = option.useStateFromStores;
            entity = _closure1_slot7;
            zuuluu = new Array(1);
            zuuluu[0] = entity;
            entity = function() {
                michal = _closure1_slot7;
                entity = michal.isConnected;
                entity = entity.bind(michal)();
                return entity;
            };
            tangon = tangon.bind(option)(zuuluu, entity);
            entity = 23;
            entity = yankee[entity];
            zuuluu = offset.bind(report)(entity);
            entity = zuuluu.useNewShareScreen;
            zuuluu = entity.bind(zuuluu)();
            entity = 24;
            option = yankee[entity];
            option = offset.bind(report)(option);
            backup = option.ShareScreenRevampExperiment;
            foxtra = backup.useExperiment;
            option = {};
            romeon = 'AppShareWrapped';
            option['location'] = romeon;
            option = foxtra.bind(backup)(option);
            option = option.enabled;
            entity = yankee[entity];
            entity = offset.bind(report)(entity);
            yankee = entity.ShareScreenRevampCommonTriggerExperiment;
            offset = yankee.useExperiment;
            entity = {};
            entity['location'] = romeon;
            entity = offset.bind(yankee)(entity);
            entity = entity.enabled;
            romeon = _closure1_slot4;
            yankee = romeon.useEffect;
            offset = oscard.attachments;
            foxtra = offset.length;
            offset = new Array(2);
            offset[0] = foxtra;
            foxtra = oscard.text;
            offset[1] = foxtra;
            verify = function() {
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    tangon = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    entity = 25;
                    zuuluu = zuuluu[entity];
                    entity = undefined;
                    report = tangon.bind(entity)(zuuluu);
                    tangon = report.track;
                    michal = _closure1_slot9;
                    zuuluu = michal.EXTERNAL_SHARE_OPENED;
                    michal = {};
                    golfie = _closure2_slot0;
                    option = golfie.text;
                    golfie = null;
                    golfie = golfie != option;
                    if(!golfie) { _fun00018_ip = 83; continue _fun00017 }
 63:
                    option = _closure2_slot0;
                    option = option.text;
                    verify = option.length;
                    option = 0;
                    golfie = verify > option;
 83:
                    michal['has_content'] = golfie;
                    oscard = _closure2_slot0;
                    oscard = oscard.attachments;
                    golfie = oscard.length;
                    oscard = 0;
                    oscard = golfie > oscard;
                    michal['has_attachment'] = oscard;
                    michal = tangon.bind(report)(zuuluu, michal);
                    return entity;
                }
            };
            verify = yankee.bind(romeon)(verify, offset);
            if(option) { _fun00008_ip = 384; continue _fun00007 }
 248:
            if(entity) { _fun00008_ip = 384; continue _fun00007 }
 254:
            option = null;
            entity = null;
            if(!tangon) { _fun00008_ip = 382; continue _fun00007 }
 261:
            verify = _closure1_slot10;
            if(zuuluu) { _fun00008_ip = 348; continue _fun00007 }
 268:
            tangon = _closure1_slot1;
            offset = _closure1_slot2;
            zuuluu = 26;
            zuuluu = offset[zuuluu];
            tangon = tangon.bind(report)(zuuluu);
            zuuluu = {};
            offset = oscard.attachments;
            zuuluu['attachments'] = offset;
            offset = oscard.text;
            yankee = option != offset;
            option = '';
            if(!yankee) { _fun00008_ip = 320; continue _fun00007 }
 317:
            option = offset;
 320:
            zuuluu['text'] = option;
            option = oscard.targetChannelId;
            zuuluu['targetChannelId'] = option;
            zuuluu['initialized'] = golfie;
            zuuluu = verify.bind(report)(tangon, zuuluu);
            _fun00008_ip = 379; continue _fun00007;
 348:
            option = _closure1_slot12;
            tangon = {};
            output = tangon;
            sizing = oscard;
            offset = copyDataProperties(output, sizing);
            offset = 'initialized';
            tangon[offset] = golfie;
            zuuluu = verify.bind(report)(option, tangon);
 379:
            entity = zuuluu;
 382:
            _fun00008_ip = 419; continue _fun00007;
 384:
            tangon = _closure1_slot10;
            zuuluu = _closure1_slot13;
            michal = {};
            output = michal;
            sizing = oscard;
            oscard = copyDataProperties(output, sizing);
            oscard = 'initialized';
            michal[oscard] = golfie;
            entity = tangon.bind(report)(zuuluu, michal);
 419:
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();