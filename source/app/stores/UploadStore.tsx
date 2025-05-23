// app/stores/UploadStore.tsx
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
 70: // try_end0
            _fun00002_ip = 74; continue _fun00001;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            michal = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot14 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot14 = entity;
    entity = function(argFoo, argBar) { // Original name: storeLocalUriForUpload
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argBar;
            var _closure2_slot0 = entity;
            tangon = _closure1_slot13;
            golfie = entity.items;
            michal = null;
            oscard = michal == golfie;
            entity = undefined;
            zuuluu = undefined;
            if(oscard) { _fun00004_ip = 50; continue _fun00003 }
 35:
            oscard = golfie.map;
            report = function(argFoo) {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    zuuluu = argFoo;
                    michal = zuuluu.item;
                    oscard = _closure1_slot6;
                    report = oscard.test;
                    tangon = michal.originalUri;
                    tangon = report.bind(oscard)(tangon);
                    if(tangon) { _fun00006_ip = 61; continue _fun00005 }
 34:
                    report = _closure1_slot7;
                    tangon = report.test;
                    entity = michal.originalUri;
                    entity = tangon.bind(report)(entity);
                    if(entity) { _fun00006_ip = 61; continue _fun00005 }
 57:
                    entity = undefined;
                    return entity;
 61:
                    entity = {};
                    golfie = michal.width;
                    tangon = null;
                    option = tangon != golfie;
                    oscard = 0;
                    if(!option) { _fun00006_ip = 82; continue _fun00005 }
 79:
                    oscard = golfie;
 82:
                    entity['width'] = oscard;
                    oscard = michal.height;
                    golfie = tangon != oscard;
                    report = 0;
                    if(!golfie) { _fun00006_ip = 103; continue _fun00005 }
 100:
                    report = oscard;
 103:
                    entity['height'] = report;
                    oscard = michal.originalUri;
                    golfie = tangon != oscard;
                    michal = '';
                    report = michal;
                    if(!golfie) { _fun00006_ip = 130; continue _fun00005 }
 127:
                    report = oscard;
 130:
                    entity['localUri'] = report;
                    report = _closure2_slot0;
                    report = report.id;
                    entity['uploaderId'] = report;
                    zuuluu = zuuluu.id;
                    tangon = tangon != zuuluu;
                    if(!tangon) { _fun00006_ip = 167; continue _fun00005 }
 164:
                    michal = zuuluu;
 167:
                    entity['uploaderItemId'] = michal;
                    return entity;
                }
            };
            zuuluu = oscard.bind(golfie)(report);
 50:
            if(!(michal == zuuluu)) { _fun00004_ip = 58; continue _fun00003 }
 54:
            zuuluu = new Array(0);
 58:
            michal = argFoo;
            tangon[michal] = zuuluu;
            return entity;
        }
    };
    var _closure1_slot15 = entity;
    entity = function() { // Original name: clearLocalUriForUpload
        entity = {};
        _closure1_slot13 = entity;
        entity = undefined;
        return entity;
    };
    var _closure1_slot16 = entity;
    entity = function(argFoo, argBar) { // Original name: clearFile
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            tangon = argFoo;
            oscard = argBar;
            var _closure2_slot0 = oscard;
            entity = _closure1_slot9;
            zuuluu = entity[tangon];
            entity = null;
            entity = entity != zuuluu;
            if(!entity) { _fun00008_ip = 93; continue _fun00007 }
 32:
            golfie = _closure1_slot9;
            option = zuuluu.filter;
            report = function(argFoo) {
                entity = argFoo;
                michal = entity.id;
                entity = _closure2_slot0;
                entity = michal !== entity;
                return entity;
            };
            report = option.bind(zuuluu)(report);
            golfie[tangon] = report;
            report = _closure1_slot10;
            report = delete report[oscard];
            report = _closure1_slot11;
            report = delete report[oscard];
            zuuluu = zuuluu.length;
            michal = _closure1_slot9;
            michal = michal[tangon];
            michal = michal.length;
            entity = zuuluu !== michal;
 93:
            return entity;
        }
    };
    var _closure1_slot17 = entity;
    entity = function(argFoo, argBar) { // Original name: updateFile
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            report = argFoo;
            tangon = argBar;
            var _closure2_slot0 = tangon;
            michal = _closure1_slot9;
            option = michal[report];
            zuuluu = null;
            if(!(zuuluu != option)) { _fun00010_ip = 141; continue _fun00009 }
 29:
            michal = _closure1_slot9;
            golfie = option.map;
            entity = function(argFoo) {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    tangon = argFoo;
                    report = tangon.id;
                    entity = _closure2_slot0;
                    michal = entity.id;
                    entity = tangon;
                    if(!(report === michal)) { _fun00012_ip = 53; continue _fun00011 }
 27:
                    michal = {};
                    golfie = michal;
                    oscard = tangon;
                    tangon = copyDataProperties(golfie, oscard);
                    oscard = _closure2_slot0;
                    golfie = michal;
                    zuuluu = copyDataProperties(golfie, oscard);
                    entity = michal;
 53:
                    return entity;
                }
            };
            entity = golfie.bind(option)(entity);
            michal[report] = entity;
            michal = _closure1_slot11;
            entity = tangon.id;
            report = michal[entity];
            entity = zuuluu != report;
            if(!entity) { _fun00010_ip = 89; continue _fun00009 }
 72:
            golfie = _closure1_slot12;
            michal = report.id;
            michal = golfie[michal];
            entity = zuuluu != michal;
 89:
            if(!entity) { _fun00010_ip = 137; continue _fun00009 }
 92:
            zuuluu = _closure1_slot12;
            michal = report.id;
            entity = {};
            oscard = _closure1_slot12;
            report = report.id;
            verify = oscard[report];
            offset = entity;
            report = copyDataProperties(offset, verify);
            offset = entity;
            verify = tangon;
            tangon = copyDataProperties(offset, verify);
            zuuluu[michal] = entity;
 137:
            entity = undefined;
            return entity;
 141:
            entity = false;
            return entity;
        }
    };
    var _closure1_slot18 = entity;
    michal = global;
    verify = michal.Object;
    option = verify.defineProperty;
    golfie = {};
    entity = true;
    golfie['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, golfie);
    entity = 0;
    golfie = report[entity];
    entity = undefined;
    golfie = oscard.bind(entity)(golfie);
    var _closure1_slot0 = golfie;
    golfie = 1;
    golfie = report[golfie];
    golfie = oscard.bind(entity)(golfie);
    var _closure1_slot1 = golfie;
    golfie = 2;
    golfie = report[golfie];
    golfie = oscard.bind(entity)(golfie);
    var _closure1_slot2 = golfie;
    golfie = 3;
    golfie = report[golfie];
    golfie = oscard.bind(entity)(golfie);
    var _closure1_slot3 = golfie;
    golfie = 4;
    golfie = report[golfie];
    golfie = oscard.bind(entity)(golfie);
    var _closure1_slot4 = golfie;
    golfie = 5;
    golfie = report[golfie];
    golfie = oscard.bind(entity)(golfie);
    var _closure1_slot5 = golfie;
    golfie = /^(assets-library|ph|file):\\/\\//;
    var _closure1_slot6 = golfie;
    golfie = /^content:\\/\\//;
    var _closure1_slot7 = golfie;
    option = michal.Object;
    golfie = option.freeze;
    michal = new Array(0);
    michal = golfie.bind(option)(michal);
    var _closure1_slot8 = michal;
    michal = {};
    var _closure1_slot9 = michal;
    michal = {};
    var _closure1_slot10 = michal;
    michal = {};
    var _closure1_slot11 = michal;
    michal = {};
    var _closure1_slot12 = michal;
    michal = {};
    var _closure1_slot13 = michal;
    michal = 6;
    michal = report[michal];
    michal = oscard.bind(entity)(michal);
    golfie = michal.Store;
    michal = function(argFoo) {
        tangon = function() { // Original name: UploadStore
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
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
                entity = _closure1_slot14;
                entity = entity.bind(zuuluu)();
                if(entity) { _fun00014_ip = 69; continue _fun00013 }
 51:
                golfie = verify.apply;
                report = arguments;
                entity = report;
                entity = golfie.bind(verify)(tangon, entity);
                _fun00014_ip = 105; continue _fun00013;
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
        entity = function() { // Original name: value
            zuuluu = this;
            michal = zuuluu.waitFor;
            entity = _closure1_slot5;
            entity = michal.bind(zuuluu)(entity);
            entity = undefined;
            return entity;
        };
        report['value'] = entity;
        entity = new Array(5);
        entity[0] = report;
        report = {};
        golfie = 'getFiles';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                zuuluu = _closure1_slot9;
                entity = argFoo;
                entity = zuuluu[entity];
                zuuluu = null;
                if(!(zuuluu == entity)) { _fun00016_ip = 24; continue _fun00015 }
 20:
                entity = _closure1_slot8;
 24:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[1] = report;
        report = {};
        golfie = 'getMessageForFile';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            michal = _closure1_slot11;
            entity = argFoo;
            entity = michal[entity];
            return entity;
        };
        report['value'] = golfie;
        entity[2] = report;
        report = {};
        golfie = 'getUploaderFileForMessageId';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            michal = _closure1_slot12;
            entity = argFoo;
            entity = michal[entity];
            return entity;
        };
        report['value'] = golfie;
        entity[3] = report;
        report = {};
        golfie = 'getUploadAttachments';
        report['key'] = golfie;
        oscard = function(argFoo) { // Original name: value
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                michal = argFoo;
                entity = null;
                if(!(entity == michal)) { _fun00018_ip = 13; continue _fun00017 }
 9:
                entity = undefined;
                return entity;
 13:
                entity = _closure1_slot13;
                entity = entity[michal];
                return entity;
            }
        };
        report['value'] = oscard;
        entity[4] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    golfie = michal.bind(entity)(golfie);
    michal = 'UploadStore';
    golfie['displayName'] = michal;
    michal = 7;
    michal = report[michal];
    romeon = oscard.bind(entity)(michal);
    michal = {};
    option = function() { // Original name: handleConnectionOpen
        michal = _closure1_slot16;
        entity = undefined;
        michal = michal.bind(entity)();
        return entity;
    };
    michal['CONNECTION_OPEN'] = option;
    option = function() { // Original name: handleLogout
        michal = _closure1_slot16;
        entity = undefined;
        michal = michal.bind(entity)();
        return entity;
    };
    michal['LOGOUT'] = option;
    option = function(argFoo) { // Original name: handleUploadStart
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            entity = argFoo;
            golfie = entity.channelId;
            tangon = entity.file;
            option = entity.uploader;
            entity = entity.message;
            michal = option._aborted;
            if(michal) { _fun00020_ip = 207; continue _fun00019 }
 37:
            michal = option._errored;
            if(michal) { _fun00020_ip = 207; continue _fun00019 }
 49:
            zuuluu = _closure1_slot9;
            verify = zuuluu[golfie];
            report = null;
            if(!(report == verify)) { _fun00020_ip = 70; continue _fun00019 }
 66:
            verify = _closure1_slot8;
 70:
            oscard = _closure1_slot10;
            zuuluu = tangon.id;
            oscard[zuuluu] = option;
            oscard = _closure1_slot9;
            zuuluu = new Array(1);
            offset = 0;
            romeon = zuuluu;
            yankee = verify;
            verify = arraySpread(romeon, yankee, offset);
            zuuluu[verify] = tangon;
            option = 1;
            option = verify + option;
            oscard[golfie] = zuuluu;
            if(!(report != entity)) { _fun00020_ip = 207; continue _fun00019 }
 123:
            oscard = _closure1_slot11;
            zuuluu = tangon.id;
            oscard[zuuluu] = entity;
            verify = tangon.items;
            if(!(report != verify)) { _fun00020_ip = 180; continue _fun00019 }
 146:
            golfie = _closure1_slot12;
            oscard = entity.id;
            zuuluu = {};
            romeon = zuuluu;
            yankee = tangon;
            option = copyDataProperties(romeon, yankee);
            option = 'items';
            zuuluu[option] = verify;
            golfie[oscard] = zuuluu;
 180:
            zuuluu = _closure1_slot15;
            michal = entity.nonce;
            if(!(report == michal)) { _fun00020_ip = 199; continue _fun00019 }
 194:
            michal = entity.id;
 199:
            entity = undefined;
            entity = zuuluu.bind(entity)(michal, tangon);
 207:
            entity = undefined;
            return entity;
        }
    };
    michal['UPLOAD_START'] = option;
    option = function(argFoo) { // Original name: handleUploadCompressionProgress
        entity = argFoo;
        tangon = entity.channelId;
        zuuluu = entity.file;
        michal = _closure1_slot18;
        entity = undefined;
        michal = michal.bind(entity)(tangon, zuuluu);
        return entity;
    };
    michal['UPLOAD_COMPRESSION_PROGRESS'] = option;
    option = function(argFoo) { // Original name: handleUploadProgress
        entity = argFoo;
        tangon = entity.channelId;
        zuuluu = entity.file;
        michal = _closure1_slot18;
        entity = undefined;
        michal = michal.bind(entity)(tangon, zuuluu);
        return entity;
    };
    michal['UPLOAD_PROGRESS'] = option;
    option = function(argFoo) { // Original name: handleUploadComplete
        entity = argFoo;
        tangon = entity.channelId;
        entity = entity.file;
        zuuluu = _closure1_slot17;
        michal = entity.id;
        entity = undefined;
        entity = zuuluu.bind(entity)(tangon, michal);
        return entity;
    };
    michal['UPLOAD_COMPLETE'] = option;
    option = function(argFoo) { // Original name: handleUploadFail
        entity = argFoo;
        tangon = entity.channelId;
        entity = entity.file;
        zuuluu = _closure1_slot17;
        michal = entity.id;
        entity = undefined;
        entity = zuuluu.bind(entity)(tangon, michal);
        return entity;
    };
    michal['UPLOAD_FAIL'] = option;
    option = function(argFoo) { // Original name: handleUploadCancel
        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
            entity = argFoo;
            entity = entity.file;
            zuuluu = _closure1_slot10;
            entity = entity.id;
            zuuluu = zuuluu[entity];
            var _closure2_slot0 = zuuluu;
            entity = null;
            if(!(entity != zuuluu)) { _fun00022_ip = 59; continue _fun00021 }
 37:
            entity = global;
            zuuluu = entity.setImmediate;
            entity = undefined;
            michal = function() {
                _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                    entity = _closure2_slot0;
                    zuuluu = entity.cancel;
                    entity = null;
                    zuuluu = entity == zuuluu;
                    entity = undefined;
                    if(zuuluu) { _fun00024_ip = 38; continue _fun00023 }
 24:
                    zuuluu = _closure2_slot0;
                    michal = zuuluu.cancel;
                    entity = michal.bind(zuuluu)();
 38:
                    return entity;
                }
            };
            michal = zuuluu.bind(entity)(michal);
            return entity;
 59:
            entity = false;
            return entity;
        }
    };
    michal['UPLOAD_CANCEL_REQUEST'] = option;
    option = function(argFoo) { // Original name: handleUploadItemCancel
        _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
            zuuluu = argFoo;
            entity = zuuluu.file;
            zuuluu = zuuluu.itemId;
            var _closure2_slot0 = zuuluu;
            zuuluu = _closure1_slot10;
            entity = entity.id;
            zuuluu = zuuluu[entity];
            var _closure2_slot1 = zuuluu;
            entity = null;
            if(!(entity != zuuluu)) { _fun00026_ip = 69; continue _fun00025 }
 47:
            entity = global;
            zuuluu = entity.setImmediate;
            entity = undefined;
            michal = function() {
                zuuluu = _closure2_slot1;
                michal = zuuluu.cancelItem;
                entity = _closure2_slot0;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            michal = zuuluu.bind(entity)(michal);
            return entity;
 69:
            entity = false;
            return entity;
        }
    };
    michal['UPLOAD_ITEM_CANCEL_REQUEST'] = option;
    option = function(argFoo) { // Original name: handleUploadFileUpdate
        _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
            entity = argFoo;
            tangon = entity.channelId;
            zuuluu = entity.file;
            report = _closure1_slot11;
            michal = zuuluu.id;
            michal = report[michal];
            golfie = null;
            if(!(golfie != michal)) { _fun00028_ip = 63; continue _fun00027 }
 36:
            oscard = _closure1_slot15;
            report = michal.nonce;
            if(!(golfie == report)) { _fun00028_ip = 55; continue _fun00027 }
 50:
            report = michal.id;
 55:
            michal = undefined;
            michal = oscard.bind(michal)(report, zuuluu);
 63:
            michal = _closure1_slot18;
            entity = undefined;
            michal = michal.bind(entity)(tangon, zuuluu);
            return entity;
        }
    };
    michal['UPLOAD_FILE_UPDATE'] = option;
    tangon = function(argFoo) { // Original name: restoreFailedUpload
        entity = argFoo;
        zuuluu = entity.file;
        michal = entity.messageId;
        entity = _closure1_slot12;
        entity[michal] = zuuluu;
        entity = undefined;
        return entity;
    };
    michal['UPLOAD_RESTORE_FAILED_UPLOAD'] = tangon;
    tangon = golfie.prototype;
    tangon = Object.create(tangon, {constructor: {value: golfie}});
    foxtra = tangon;
    yankee = michal;
    michal = new foxtra[golfie](romeon, yankee, offset);
    michal = michal instanceof Object ? michal : tangon;
    tangon = 8;
    report = report[tangon];
    tangon = argBar;
    oscard = tangon.bind(entity)(report);
    report = oscard.fileFinishedImporting;
    tangon = 'stores/UploadStore.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();