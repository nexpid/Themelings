// app/modules/messages/native/renderer/rows/UploadProgress.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    oscard = argBar;
    zuuluu = argFre;
    golfie = argPlu;
    entity = argBaz;
    var _closure1_slot0 = entity;
    var _closure1_slot1 = golfie;
    michal = function(argFoo, argBar, argBaz) { // Original name: generateUploadProgressRowData
        entity = argFoo;
        michal = entity.changeType;
        offset = entity.roleStyle;
        yankee = entity.message;
        zuuluu = entity.files;
        entity = {};
        tangon = _closure1_slot2;
        tangon = tangon.UPLOAD_PROGRESS;
        entity['type'] = tangon;
        tangon = {};
        golfie = _closure1_slot0;
        option = _closure1_slot1;
        report = 4;
        report = option[report];
        oscard = undefined;
        verify = golfie.bind(oscard)(report);
        report = {'options': null, 'message': null, 'roleStyle': null, 'isFirst': true, 'isEditing': false, 'canShowImages': false};
        romeon = argBar;
        report['options'] = romeon;
        report['message'] = yankee;
        report['roleStyle'] = offset;
        foxtra = verify.bind(oscard)(report);
        backup = tangon;
        report = copyDataProperties(backup, foxtra);
        report = 5;
        report = option[report];
        golfie = golfie.bind(oscard)(report);
        oscard = golfie.createUploadProgressEmbed;
        report = argBaz;
        oscard = oscard.bind(golfie)(zuuluu, report);
        report = 'progress';
        tangon[report] = oscard;
        entity['message'] = tangon;
        entity['changeType'] = michal;
        michal = 0;
        michal = zuuluu[michal];
        michal = michal.id;
        entity['fileId'] = michal;
        return entity;
    };
    var _closure1_slot4 = michal;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, report);
    entity = 0;
    option = golfie[entity];
    report = argCor;
    entity = undefined;
    report = report.bind(entity)(option);
    report = 1;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    report = report.RowType;
    var _closure1_slot2 = report;
    report = 2;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    report = report.jsx;
    var _closure1_slot3 = report;
    report = 6;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/messages/native/renderer/rows/UploadProgress.tsx';
    report = oscard.bind(golfie)(report);
    tangon = function(argFoo) { // Original name: UploadProgress
        entity = argFoo;
        option = entity.row;
        golfie = entity.options;
        oscard = entity.theme;
        tangon = _closure1_slot3;
        michal = _closure1_slot0;
        zuuluu = _closure1_slot1;
        entity = 3;
        entity = zuuluu[entity];
        zuuluu = undefined;
        entity = michal.bind(zuuluu)(entity);
        michal = entity.UploadProgress;
        entity = {};
        report = _closure1_slot4;
        offset = report.bind(zuuluu)(option, golfie, oscard);
        yankee = entity;
        report = copyDataProperties(yankee, offset);
        entity = tangon.bind(zuuluu)(michal, entity);
        return entity;
    };
    zuuluu['default'] = tangon;
    zuuluu['generateUploadProgressRowData'] = michal;
    return entity;
})();