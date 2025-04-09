// app/utils/AttachmentFile.native.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function() { // Original name: _getAttachmentFile
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    zuuluu = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00002_ip = 345; continue _fun00001 }
 13:
                    verify = zuuluu;
                    tangon = argBar;
                    offset = undefined;
                    golfie = undefined;
                    report = undefined;
                    option = undefined;
                    oscard = undefined;
                    romeon = _closure1_slot1;
                    backup = _closure1_slot2;
                    yankee = 2;
                    yankee = backup[yankee];
                    romeon = romeon.bind(offset)(yankee);
                    zuuluu = zuuluu.item;
                    yankee = zuuluu.platform;
                    foxtra = _closure1_slot0;
                    zuuluu = 3;
                    zuuluu = backup[zuuluu];
                    zuuluu = foxtra.bind(offset)(zuuluu);
                    zuuluu = zuuluu.UploadPlatform;
                    zuuluu = zuuluu.REACT_NATIVE;
                    yankee = yankee === zuuluu;
                    zuuluu = 'Upload must be in the React Native format';
                    zuuluu = romeon.bind(offset)(yankee, zuuluu);
 107: // try_start_1
                    romeon = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    yankee = 4;
                    zuuluu = zuuluu[yankee];
                    backup = romeon.bind(offset)(zuuluu);
                    foxtra = backup.getFileInfo;
                    romeon = verify;
                    zuuluu = tangon;
                    zuuluu = foxtra.bind(backup)(romeon, zuuluu);
                    SaveGenerator(address=149);
 147:
                    return zuuluu;
 149:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=11);
                    if(romeon) { _fun00002_ip = 314; continue _fun00001 }
 158:
                    option = zuuluu;
                    foxtra = _closure1_slot0;
                    backup = _closure1_slot2;
                    romeon = 5;
                    romeon = backup[romeon];
                    backup = foxtra.bind(offset)(romeon);
                    foxtra = backup.getAttachmentPayload;
                    romeon = verify;
                    verify = tangon;
                    tangon = zuuluu.name;
                    oscard = foxtra.bind(backup)(romeon, verify, tangon);
 205: // try_start_0
                    verify = _closure1_slot0;
                    tangon = _closure1_slot2;
                    tangon = tangon[yankee];
                    offset = verify.bind(offset)(tangon);
                    verify = offset.getFileSize;
                    tangon = option;
                    tangon = tangon.uri;
                    tangon = verify.bind(offset)(tangon);
                    SaveGenerator(address=245);
 243:
                    return tangon;
 245:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=8);
                    if(verify) { _fun00002_ip = 256; continue _fun00001 }
 251:
                    report = tangon;
 254: // try_end0
                    _fun00002_ip = 261; continue _fun00001;
 256: // try_end1
                    return tangon;
 259: // try_start_2 // catch_target0
                    CatchBlockStart(arg_register=3);
 261:
                    tangon = {};
                    tangon['file'] = option;
                    option = option.uri;
                    tangon['uri'] = option;
                    option = oscard.filename;
                    golfie = option;
                    oscard = null;
                    option = oscard != option;
                    oscard = '';
                    if(!option) { _fun00002_ip = 302; continue _fun00001 }
 299:
                    oscard = golfie;
 302:
                    tangon['name'] = oscard;
                    tangon['fileSize'] = report;
 311: // try_end2
                    return tangon;
 314:
                    return zuuluu;
 317: // catch_target1 // catch_target2
                    CatchBlockStart(arg_register=4);
                    tangon = _closure1_slot4;
                    zuuluu = tangon.error;
                    michal = 'Failed to get attachment file';
                    michal = zuuluu.bind(tangon)(michal, report);
                    michal = undefined;
                    return michal;
 345:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot5 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot5 = entity;
    entity = function() { // Original name: _cancelGetAttachmentFile
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00004_ip = 62; continue _fun00003 }
 7:
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    michal = 4;
                    michal = zuuluu[michal];
                    zuuluu = undefined;
                    report = tangon.bind(zuuluu)(michal);
                    tangon = report.cancelGetFileInfo;
                    michal = argFoo;
                    michal = tangon.bind(report)(michal);
                    SaveGenerator(address=50);
 48:
                    return michal;
 50:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tangon) { _fun00004_ip = 59; continue _fun00003 }
 56:
                    return zuuluu;
 59:
                    return michal;
 62:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot6 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot6 = entity;
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
    tangon = oscard[tangon];
    option = golfie.bind(entity)(tangon);
    tangon = option.prototype;
    golfie = Object.create(tangon, {constructor: {value: option}});
    romeon = 'AttachmentFile';
    foxtra = golfie;
    tangon = new foxtra[option](romeon, yankee);
    tangon = tangon instanceof Object ? tangon : golfie;
    var _closure1_slot4 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'utils/AttachmentFile.native.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function() { // Original name: getAttachmentFile
        entity = undefined;
        tangon = _closure1_slot5;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['getAttachmentFile'] = tangon;
    michal = function() { // Original name: cancelGetAttachmentFile
        entity = undefined;
        tangon = _closure1_slot6;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['cancelGetAttachmentFile'] = michal;
    return entity;
})();