// app/modules/frames/FramesActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
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
    tangon = 3;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/frames/FramesActionCreators.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: launchFrame
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            report = entity.applicationId;
            zuuluu = _closure1_slot3;
            michal = zuuluu.getCurrentEmbeddedActivity;
            oscard = michal.bind(zuuluu)();
            michal = null;
            if(!(michal != oscard)) { _fun00002_ip = 91; continue _fun00001 }
 31:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            michal = 1;
            zuuluu = zuuluu[michal];
            michal = undefined;
            tangon = tangon.bind(michal)(zuuluu);
            zuuluu = tangon.stopEmbeddedActivity;
            michal = {};
            golfie = oscard.location;
            michal['location'] = golfie;
            oscard = oscard.applicationId;
            michal['applicationId'] = oscard;
            oscard = false;
            michal['showFeedback'] = oscard;
            michal = zuuluu.bind(tangon)(michal);
 91:
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 2;
            michal = michal[entity];
            entity = undefined;
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.dispatch;
            michal = {};
            oscard = 'FRAME_LAUNCH';
            michal['type'] = oscard;
            michal['applicationId'] = report;
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        }
    };
    zuuluu['launchFrame'] = tangon;
    tangon = function(argFoo) { // Original name: stopFrame
        entity = argFoo;
        report = entity.applicationId;
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 2;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        oscard = 'FRAME_STOP';
        michal['type'] = oscard;
        michal['applicationId'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['stopFrame'] = tangon;
    michal = function(argFoo) { // Original name: updateFrameLayoutMode
        entity = argFoo;
        oscard = entity.applicationId;
        report = entity.layoutMode;
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 2;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        golfie = 'FRAME_UPDATE_LAYOUT_MODE';
        michal['type'] = golfie;
        michal['applicationId'] = oscard;
        michal['layoutMode'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['updateFrameLayoutMode'] = michal;
    return entity;
})();