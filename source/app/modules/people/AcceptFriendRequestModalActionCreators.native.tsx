// app/modules/people/AcceptFriendRequestModalActionCreators.native.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscard;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = report.bind(entity)(tangon);
    tangon = tangon.ACCEPT_FRIEND_REQUEST_CONFIRMATION_MODAL_ID;
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.AnalyticEvents;
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot5 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/people/AcceptFriendRequestModalActionCreators.native.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: openAcceptFriendRequestConfirmModal
        entity = argFoo;
        michal = entity.onConfirm;
        var _closure2_slot0 = michal;
        entity = entity.onCancel;
        var _closure2_slot1 = entity;
        zuuluu = _closure1_slot1;
        tangon = _closure1_slot2;
        entity = 3;
        michal = tangon[entity];
        entity = undefined;
        option = zuuluu.bind(entity)(michal);
        golfie = option.track;
        michal = _closure1_slot4;
        oscard = michal.OPEN_MODAL;
        michal = {};
        verify = _closure1_slot3;
        michal['type'] = verify;
        michal = golfie.bind(option)(oscard, michal);
        michal = 4;
        michal = tangon[michal];
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.openLazy;
        michal = {};
        report = function() { // Original name: importer
            zuuluu = _closure1_slot0;
            entity = _closure1_slot2;
            michal = 6;
            michal = entity[michal];
            tangon = undefined;
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = 5;
            michal = entity[michal];
            entity = entity.paths;
            zuuluu = zuuluu.bind(tangon)(michal, entity);
            michal = zuuluu.then;
            entity = function(argFoo) {
                michal = argFoo;
                michal = michal.default;
                var _closure4_slot0 = michal;
                entity = function(argFoo) {
                    report = argFoo;
                    var _closure5_slot0 = report;
                    tangon = _closure1_slot5;
                    zuuluu = _closure4_slot0;
                    michal = {};
                    golfie = michal;
                    oscard = report;
                    report = copyDataProperties(golfie, oscard);
                    report = function() { // Original name: onCancel
                        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                            michal = _closure5_slot0;
                            entity = michal.onClose;
                            entity = entity.bind(michal)();
                            zuuluu = _closure2_slot1;
                            michal = null;
                            if(!(michal != zuuluu)) { _fun00002_ip = 40; continue _fun00001 }
 30:
                            michal = _closure2_slot1;
                            entity = undefined;
                            entity = michal.bind(entity)();
 40:
                            entity = undefined;
                            return entity;
                        }
                    };
                    entity = 'onCancel';
                    michal[entity] = report;
                    report = _closure2_slot0;
                    entity = 'onConfirm';
                    michal[entity] = report;
                    entity = undefined;
                    entity = tangon.bind(entity)(zuuluu, michal);
                    return entity;
                };
                return entity;
            };
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        michal['importer'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['openAcceptFriendRequestConfirmModal'] = michal;
    return entity;
})();