// app/modules/instant_invite/native/DCDSendUtils.tsx
export default (function(argFoo, argBar, _, __, ___, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
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
    tango = tango.NativeModules;
    var _closure1_slot0 = tango;
    tango = 1;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/instant_invite/native/DCDSendUtils.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo, argBar) {
        entity = _closure1_slot0;
        tango = entity.DCDSend;
        zulu = tango.sendSMS;
        mike = argFoo;
        entity = argBar;
        entity = zulu.bind(tango)(mike, entity);
        entity = undefined;
        return entity;
    };
    zulu['sendSMS'] = tango;
    tango = function(argFoo, argBar) {
        entity = _closure1_slot0;
        tango = entity.DCDSend;
        zulu = tango.sendMail;
        mike = argFoo;
        entity = argBar;
        entity = zulu.bind(tango)(mike, entity);
        entity = undefined;
        return entity;
    };
    zulu['sendMail'] = tango;
    tango = function() {
        entity = _closure1_slot0;
        mike = entity.DCDSend;
        entity = mike.canSendSMS;
        entity = entity.bind(mike)();
        return entity;
    };
    zulu['canSendSMS'] = tango;
    mike = function() {
        entity = _closure1_slot0;
        mike = entity.DCDSend;
        entity = mike.canSendMail;
        entity = entity.bind(mike)();
        return entity;
    };
    zulu['canSendMail'] = mike;
    return entity;
})();