// app/actions/native/UploadActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = golfie;
    var _closure1_slot1 = oscard;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, michal);
    michal = 0;
    option = oscard[michal];
    entity = undefined;
    option = golfie.bind(entity)(option);
    var _closure1_slot2 = option;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    michal = michal.DraftType;
    var _closure1_slot3 = michal;
    michal = 1;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot4 = michal;
    michal = {};
    golfie = function(argFoo, argBar) { // Original name: restoreFailedUpload
        zuuluu = _closure1_slot0;
        michal = _closure1_slot1;
        entity = 2;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'UPLOAD_RESTORE_FAILED_UPLOAD';
        michal['type'] = report;
        report = argFoo;
        michal['messageId'] = report;
        report = argBar;
        michal['file'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    michal['restoreFailedUpload'] = golfie;
    golfie = function(argFoo, argBar) { // Original name: cancel
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argBar;
            oscard = _closure1_slot0;
            entity = _closure1_slot1;
            tangon = 2;
            zuuluu = entity[tangon];
            entity = undefined;
            golfie = oscard.bind(entity)(zuuluu);
            oscard = golfie.dispatch;
            zuuluu = {};
            option = 'UPLOAD_CANCEL_REQUEST';
            zuuluu['type'] = option;
            option = argFoo;
            zuuluu['channelId'] = option;
            zuuluu['file'] = michal;
            zuuluu = oscard.bind(golfie)(zuuluu);
            oscard = _closure1_slot4;
            zuuluu = oscard.getMessageForFile;
            michal = michal.id;
            oscard = zuuluu.bind(oscard)(michal);
            michal = null;
            if(!(michal != oscard)) { _fun00002_ip = 198; continue _fun00001 }
 86:
            option = _closure1_slot2;
            golfie = option.getDraft;
            zuuluu = oscard.channel_id;
            michal = _closure1_slot3;
            michal = michal.ChannelMessage;
            zuuluu = golfie.bind(option)(zuuluu, michal);
            michal = '';
            if(!(michal === zuuluu)) { _fun00002_ip = 198; continue _fun00001 }
 125:
            zuuluu = _closure1_slot0;
            michal = _closure1_slot1;
            michal = michal[tangon];
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.dispatch;
            michal = {};
            golfie = 'DRAFT_SAVE';
            michal['type'] = golfie;
            golfie = oscard.channel_id;
            michal['channelId'] = golfie;
            oscard = oscard.content;
            michal['draft'] = oscard;
            report = _closure1_slot3;
            report = report.ChannelMessage;
            michal['draftType'] = report;
            michal = zuuluu.bind(tangon)(michal);
 198:
            return entity;
        }
    };
    michal['cancel'] = golfie;
    tangon = function(argFoo, argBar) { // Original name: cancelUploadItem
        zuuluu = _closure1_slot0;
        michal = _closure1_slot1;
        entity = 2;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'UPLOAD_ITEM_CANCEL_REQUEST';
        michal['type'] = report;
        report = argFoo;
        michal['file'] = report;
        report = argBar;
        michal['itemId'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    michal['cancelUploadItem'] = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'actions/native/UploadActionCreators.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();