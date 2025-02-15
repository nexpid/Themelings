// app/modules/people/AcceptFriendRequestModalActionCreators.native.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscar;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = report.bind(entity)(tango);
    tango = tango.ACCEPT_FRIEND_REQUEST_CONFIRMATION_MODAL_ID;
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.AnalyticEvents;
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsx;
    var _closure1_slot5 = tango;
    tango = 7;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/people/AcceptFriendRequestModalActionCreators.native.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: openAcceptFriendRequestConfirmModal
        entity = argFoo;
        mike = entity.onConfirm;
        var _closure2_slot0 = mike;
        entity = entity.onCancel;
        var _closure2_slot1 = entity;
        zulu = _closure1_slot1;
        tango = _closure1_slot2;
        entity = 3;
        mike = tango[entity];
        entity = undefined;
        options = zulu.bind(entity)(mike);
        golf = options.track;
        mike = _closure1_slot4;
        oscar = mike.OPEN_MODAL;
        mike = {};
        verify = _closure1_slot3;
        mike['type'] = verify;
        mike = golf.bind(options)(oscar, mike);
        mike = 4;
        mike = tango[mike];
        tango = zulu.bind(entity)(mike);
        zulu = tango.openLazy;
        mike = {};
        report = function() { // Original name: importer
            zulu = _closure1_slot0;
            entity = _closure1_slot2;
            mike = 6;
            mike = entity[mike];
            tango = undefined;
            zulu = zulu.bind(tango)(mike);
            mike = 5;
            mike = entity[mike];
            entity = entity.paths;
            zulu = zulu.bind(tango)(mike, entity);
            mike = zulu.then;
            entity = function(argFoo) {
                mike = argFoo;
                mike = mike.default;
                var _closure4_slot0 = mike;
                entity = function(argFoo) {
                    report = argFoo;
                    var _closure5_slot0 = report;
                    tango = _closure1_slot5;
                    zulu = _closure4_slot0;
                    mike = {};
                    golf = mike;
                    oscar = report;
                    report = copyDataProperties(golf, oscar);
                    report = function() { // Original name: onCancel
                        _fun80911: for(var _fun80911_ip = 0; ; ) switch(_fun80911_ip) {
 0:
                            mike = _closure5_slot0;
                            entity = mike.onClose;
                            entity = entity.bind(mike)();
                            zulu = _closure2_slot1;
                            mike = null;
                            if(!(mike != zulu)) { _fun80911_ip = 40; continue _fun80911 }
 30:
                            mike = _closure2_slot1;
                            entity = undefined;
                            entity = mike.bind(entity)();
 40:
                            entity = undefined;
                            return entity;
                        }
                    };
                    entity = 'onCancel';
                    mike[entity] = report;
                    report = _closure2_slot0;
                    entity = 'onConfirm';
                    mike[entity] = report;
                    entity = undefined;
                    entity = tango.bind(entity)(zulu, mike);
                    return entity;
                };
                return entity;
            };
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        mike['importer'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['openAcceptFriendRequestConfirmModal'] = mike;
    return entity;
})();